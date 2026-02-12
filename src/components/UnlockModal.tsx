import { useState } from "react";

interface UnlockModalProps {
  open: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

const UnlockModal = ({ open, onClose, onUnlock }: UnlockModalProps) => {
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onUnlock();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="dark-panel p-8 grid gap-4 w-[min(480px,90vw)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="gradient-blob-lav"
          style={{ inset: "-30% 30% auto auto", width: 200, height: 200 }}
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl cursor-pointer bg-transparent border-none z-10"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-[22px] font-semibold m-0">
          Enter your email to unlock this content
        </h2>
        <p className="m-0 text-white/75 max-w-[52ch]">
          Get access to our ROI calculator, additional playbooks, and monthly AI
          marketing insights. Unsubscribe anytime.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-2.5 relative z-10"
        >
          <input
            type="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-[200px] px-3.5 py-3 rounded-xl border border-white/25 bg-white/10 text-white text-[15px] placeholder:text-white/70 outline-none focus:border-white/50"
          />
          <button
            type="submit"
            className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 bg-white/20 text-white"
          >
            Unlock now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnlockModal;
