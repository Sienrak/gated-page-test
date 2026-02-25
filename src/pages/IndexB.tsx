import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ROICalculator from "@/components/ROICalculator";
import GatedContent from "@/components/GatedContent";
import UnlockModal from "@/components/UnlockModal";
import PlaybookShowcase from "@/components/PlaybookShowcase";
import ABToggle from "@/components/ABToggle";
import googExplosion from "@/assets/goog-explosion.gif";

const playbooks = [
  {
    title: "5 ways to avoid workslop",
    description:
      "In this video, we'll show you an agent that turns a single rich piece of content into dozens of assets for a multi-channel campaign. Along the way we'll explore the five key rules we use at WRITER to avoid workslop.",
    videoUrl: "https://www.youtube.com/embed/v2dHPwqwFAg?si=bAX4WH_-4ASjwh2X",
    expandedText: "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  },
  {
    title: "From SEO to GEO",
    description:
      "In this week's video we feature a playbook for an agent that can analyze hundreds of thousands of web pages, compare them to the latest best practices for how to succeed in the world of AI search, and provide you with a detailed strategy for how to improve your rankings in the world of Generative Engine Optimization",
    videoUrl: "https://www.youtube.com/embed/rN473SYk8iU",
    gifUrl: googExplosion,
    gifAlt: "Google explosion cat GIF",
  },
  {
    title: "Stop sweating swag deliveries",
    description:
      "Our field marketer Ryan Schwary show the digital intern she built to keep track of dozens of shipment in transit, allowing her to focus on the event at hand.",
    videoUrl: "https://www.youtube.com/embed/xLUP7DJ30Z8?si=Eyzohf-1CymC1RKo",
    gifUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2t5N285YWJwNmtueTg1Y250bGszZHhmZXltanBjY3locjgwMmtvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RkSjoKqjpWvlmRvbUk/giphy.gif",
    gifAlt: "Swag delivery tracking GIF",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sem vel tortor dignissim hendrerit. Vivamus id quam non nulla luctus feugiat eget nec neque.",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    gifUrl: "https://media.giphy.com/media/3o7aCTfyhYawdOXcFW/giphy.gif",
    gifAlt: "Growth GIF",
  },
];

const navChapters = [
  { label: "Intro", id: "intro" },
  { label: "Playbooks vs Prompts", id: "playbooks-vs-prompts" },
  { label: "Playbook 1", id: "playbook-1" },
  { label: "Playbook 2", id: "playbook-2" },
  { label: "Playbooks by Function", id: "by-function" },
];

const functionTabs = ["Content", "Product Marketing", "Communications", "Demand Gen", "Social"];

const IndexB = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [comparisonExpanded, setComparisonExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeFunction, setActiveFunction] = useState("Content");
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    setUnlocked(true);
    setModalOpen(false);
  };

  // Intersection observer for sticky nav
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    if (id === "playbooks-vs-prompts") {
      setComparisonExpanded(true);
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const navHeight = navRef.current?.offsetHeight || 0;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="w-[min(1400px,96vw)] mx-auto py-16 pb-28">
      <ABToggle />

      {/* Hero — full width */}
      <HeroSection />

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="h-0" />

      {/* Horizontal sticky nav */}
      <div
        ref={navRef}
        className={`transition-all duration-300 z-40 ${
          sticky
            ? "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : ""
        }`}
      >
        <nav className={`flex items-center gap-1 overflow-x-auto py-3 px-4 ${sticky ? "w-[min(1400px,96vw)] mx-auto" : ""}`}>
          {navChapters.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => scrollTo(ch.id)}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-secondary/60 hover:bg-secondary text-foreground/80 hover:text-foreground transition-colors cursor-pointer border-none flex-shrink-0"
            >
              {ch.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Spacer when nav is sticky so content doesn't jump */}
      {sticky && <div style={{ height: navRef.current?.offsetHeight || 52 }} />}

      <main className="grid gap-10 mt-8">
        {/* Intro Copy and Context */}
        <section id="intro" className="glass-section p-7">
          <div className="mb-3 text-sm font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Intro Copy and Context
          </div>
          <h2 className="text-2xl font-display font-semibold mb-4 text-[#3c2a46]">
            Why Playbooks Change the Game
          </h2>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </section>

        {/* Playbooks vs Prompts comparison */}
        <section id="playbooks-vs-prompts" className="glass-section p-7">
          <div className="mb-3 text-sm font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Playbooks vs Prompts
          </div>
          <img
            src="/prompt vs AI 2.jpg"
            alt="Playbooks vs Prompts comparison chart"
            className="w-full rounded-xl"
          />

          {/* Bouncing arrow + expandable comparison table */}
          <div className="flex flex-col items-center mt-4">
            <button
              type="button"
              onClick={() => setComparisonExpanded(!comparisonExpanded)}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60 hover:bg-secondary transition-colors cursor-pointer border-none"
              aria-label={comparisonExpanded ? "Collapse comparison" : "Expand comparison"}
            >
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  comparisonExpanded ? "rotate-180" : "animate-bounce"
                }`}
              />
            </button>
            <div
              className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                comparisonExpanded ? "max-h-[2000px] opacity-100 mt-5" : "max-h-0 opacity-0"
              }`}
            >
              <div className="overflow-x-auto rounded-xl border border-white/20">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 bg-[#3c2a46] text-white font-semibold tracking-wide uppercase text-xs w-[160px]">Dimension</th>
                      <th className="text-left py-3 px-4 bg-[#3c2a46] text-white font-semibold tracking-wide uppercase text-xs">Prompt</th>
                      <th className="text-left py-3 px-4 bg-[#3c2a46] text-white font-semibold tracking-wide uppercase text-xs">Playbook</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["What it is", "Text you type into a chatbot", "Reusable instructions for AI agents"],
                      ["Input", "Manual, free-form text every time", "Structured form fills with variables"],
                      ["Who benefits", "Only the person who wrote it", "Entire team, instantly"],
                      ["Integration", "Disconnected from your tools & data", "Native connectors, knowledge graphs, brand voice"],
                      ["Improvement", "Stays in your head or a doc", "Updates improve it for everyone"],
                      ["Consistency", "Results vary by how you phrase it", "Reliable, repeatable outputs"],
                      ["Workflow", "Single question → single answer", "Multi-step orchestration (research → analyze → deliver)"],
                      ["Skill required", "Prompt engineering expertise", "WRITER Agent collaborates on crafting Playbook instructions"],
                      ["Flexibility", "Finely tuned to a specific use case", "Variables adaptive to different use cases"],
                      ["Output", "Raw text response", "Structured deliverables (reports, dashboards, campaigns)"],
                      ["Scale", "Scales with individual skill", "Scales with team size"],
                    ].map(([dimension, prompt, playbook], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white/40" : "bg-white/20"}>
                        <td className="py-3 px-4 font-semibold text-[#3c2a46] border-t border-white/20">{dimension}</td>
                        <td className="py-3 px-4 text-foreground/80 border-t border-white/20">{prompt}</td>
                        <td className="py-3 px-4 text-foreground/80 border-t border-white/20 font-medium">{playbook}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Playbook 1 */}
        <div id="playbook-1">
          <ContentSection {...playbooks[0]} sectionLabel="Playbook 1" showDemoButton viewOutputUrl="/agentic_marketer_dashboard.html" previewUrl="/agentic_marketer_dashboard.html" />
        </div>

        {/* Playbook 2 */}
        <div id="playbook-2">
          <ContentSection
            {...playbooks[1]}
            sectionLabel="Playbook 2"
            onButtonClick={!unlocked ? () => setModalOpen(true) : undefined}
          />
        </div>

        {/* Playbooks by Function — horizontal selector */}
        <section id="by-function" className="glass-section p-7">
          <h2 className="text-xl font-display font-semibold mb-5 text-[#3c2a46]">
            Playbooks by Function
          </h2>
          <div className="flex flex-wrap gap-2">
            {functionTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveFunction(tab);
                  if (!unlocked) setModalOpen(true);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-none cursor-pointer transition-all duration-200 ${
                  activeFunction === tab
                    ? "bg-[#5551ff] text-white shadow-md"
                    : "bg-secondary/60 text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Everything below is gated */}
        <GatedContent unlocked={unlocked} onUnlock={handleUnlock}>
          <div className="grid gap-10">
            {/* Playbook Showcase */}
            <PlaybookShowcase />

            {/* Playbook 3 — Competitor Launch Analyst */}
            <ContentSection
              title="Competitor Launch Analyst"
              description={"You just finished your industry's biggest event of the year. Your competitors all launched new products with web pages, youtube videos, and speaking sessions. Your boss wants a competitive analysis and response by Monday. Here's how to get it done in 15 minutes."}
              videoUrl="https://www.youtube.com/embed/-RQajGOCutY"
              sectionLabel="Playbook 3"
              previewUrl="/enhanced_dashboard.html"
              viewOutputUrl="/enhanced_dashboard.html"
            />

            {/* ROI Calculator */}
            <ROICalculator />

            {/* Playbooks 4 & 5 */}
            {playbooks.slice(2).map((s, i) => (
              <ContentSection key={i + 2} {...s} sectionLabel={`Playbook ${i + 4}`} />
            ))}
          </div>
        </GatedContent>

        {/* Modal triggered by gated actions */}
        <UnlockModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onUnlock={handleUnlock}
        />
      </main>
    </div>
  );
};

export default IndexB;
