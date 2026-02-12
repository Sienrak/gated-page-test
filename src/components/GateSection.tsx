import { useState } from "react";

interface GateSectionProps {
  onUnlock: () => void;
}

const GateSection = ({ onUnlock }: GateSectionProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onUnlock();
  };

  return (
    <section className="dark-panel p-7 grid gap-3">
      <div
        className="gradient-blob-lav"
        style={{ inset: "-20% 40% auto auto", width: 240, height: 240 }}
      />
      <h2 className="text-[22px] font-semibold m-0">
        Enter your email to unlock more content
      </h2>
      <p className="m-0 text-white/75 max-w-[52ch]">
        We will send you tips and tricks, plus a monthly dose of AI marketing
        ideas. Unsubscribe anytime.
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
          className="flex-1 min-w-[240px] px-3.5 py-3 rounded-xl border border-white/25 bg-white/10 text-white text-[15px] placeholder:text-white/70 outline-none focus:border-white/50"
        />
        <button
          type="submit"
          className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 bg-white/20 text-white"
        >
          Unlock now
        </button>
      </form>
    </section>
  );
};

export default GateSection;
