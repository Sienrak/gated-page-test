import { useState } from "react";

interface HeroSectionProps {
  onUnlock: () => void;
}

const HeroSection = ({ onUnlock }: HeroSectionProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onUnlock();
  };

  return (
    <section className="glass-panel relative overflow-hidden p-10 md:px-11 md:py-10 grid gap-6">
      {/* Decorative blob */}
      <div className="gradient-blob-pink -top-10 -right-5 w-[220px] h-[220px]" />

      <span className="font-display text-[clamp(32px,4vw,52px)] leading-[1.05] m-0">From 1X to 10X</span>

      <h1 className="font-display text-[clamp(28px,4vw,48px)] leading-[1.05] m-0">
        Level up your marketing with AI agents
      </h1>

      <p className="text-lg text-muted-foreground max-w-[60ch] m-0">
        Learn the playbooks used by our Marketing team to scale creative, automate workflows, and prove ROI with
        confidence.
      </p>

      <div className="dark-panel p-7 grid gap-3">
        <div className="gradient-blob-lav" style={{ inset: "-20% 40% auto auto", width: 240, height: 240 }} />
        <h2 className="text-[22px] font-semibold m-0">Enter your email to unlock the content</h2>
        <p className="m-0 text-white/75 max-w-[52ch]">
          We will send you tips and tricks, plus a monthly dose of AI marketing ideas. Unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 relative z-10">
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
      </div>
    </section>
  );
};

export default HeroSection;
