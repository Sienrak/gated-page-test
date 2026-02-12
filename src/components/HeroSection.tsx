const HeroSection = () => {
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
    </section>
  );
};

export default HeroSection;
