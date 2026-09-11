import { useEffect, useState } from "react";

/**
 * Site-wide password gate.
 *
 * This is a lightweight client-side gate for keeping the page private during a
 * pre-launch / investor phase. It is NOT cryptographically secure server-side
 * protection — the check runs in the browser. We store only the SHA-256 hash of
 * the passphrase (never the plaintext) so the password is not sitting in the
 * bundle in readable form, but a determined visitor with dev tools could still
 * work around a purely client-side gate. For a shareable "please don't index /
 * don't wander in" barrier, this is the right level of effort.
 *
 * To change the password: run
 *   node -e "console.log(require('crypto').createHash('sha256').update('YOURPASS').digest('hex'))"
 * and paste the result into PASSWORD_HASH below.
 */
const PASSWORD_HASH =
  "3546ada5007638024be82545ed5e44292834ef1a92bda71ec4df07bb494e3a78"; // "communitycompute"

const STORAGE_KEY = "cc_unlocked_v1";

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH) {
        setUnlocked(true);
      }
    } catch {
      /* storage unavailable — show the gate */
    }
    setReady(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value || checking) return;
    setChecking(true);
    setError(false);
    const hash = await sha256(value.trim().toLowerCase());
    if (hash === PASSWORD_HASH) {
      try {
        localStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
      } catch {
        /* ignore */
      }
      setUnlocked(true);
    } else {
      setError(true);
      setValue("");
    }
    setChecking(false);
  };

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 right-[-10%] h-[540px] w-[540px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cc-accent) / 0.5), transparent 62%)",
        }}
      />
      <div className="relative w-full max-w-[440px]">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="cc-diamond mb-6" />
          <h1 className="text-[13px] font-medium uppercase tracking-[0.42em] text-[hsl(var(--cc-text))]">
            Community&nbsp;Compute
          </h1>
          <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-[hsl(var(--cc-muted))]">
            This page is private. Enter the passphrase you were given to
            continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Passphrase"
            aria-label="Passphrase"
            aria-invalid={error}
            className="w-full rounded-full border bg-[hsl(var(--cc-surface))] px-6 py-3.5 text-center text-[15px] tracking-wide text-[hsl(var(--cc-text))] outline-none transition-colors placeholder:text-[hsl(var(--cc-faint))] focus:border-[hsl(var(--cc-accent)/0.7)]"
            style={{ borderColor: error ? "hsl(0 62% 55%)" : undefined }}
          />
          <button type="submit" disabled={checking} className="cc-btn-primary">
            {checking ? "Checking…" : "Enter"}
          </button>
          <p
            className="min-h-[18px] text-center text-[13px] text-[hsl(0_62%_66%)]"
            role="alert"
          >
            {error ? "That passphrase isn't right. Please try again." : ""}
          </p>
        </form>

        <p className="mt-8 text-center text-[12px] tracking-wide text-[hsl(var(--cc-faint))]">
          Confidential — for discussion only
        </p>
      </div>
    </main>
  );
};

export default PasswordGate;
