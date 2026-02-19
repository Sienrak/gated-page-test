import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ROICalculator from "@/components/ROICalculator";
import GateSection from "@/components/GateSection";
import GatedContent from "@/components/GatedContent";
import UnlockModal from "@/components/UnlockModal";
import PlaybookShowcase from "@/components/PlaybookShowcase";
import SideNav from "@/components/SideNav";
import googExplosion from "@/assets/goog-explosion.gif";

const playbooks = [
  {
    title: "5 ways to avoid workslop",
    description:
      "In this video, we'll show you an agent that turns a single rich piece of content into dozens of assets for a multi-channel campaign. Along the way we'll explore the five key rules we use at WRITER to avoid workslop.",
    videoUrl: "https://www.youtube.com/embed/v2dHPwqwFAg?si=bAX4WH_-4ASjwh2X",
    gifUrl: "https://media1.tenor.com/m/xti0oGwDIGAAAAAd/slimer-ghostbusters.gif",
    gifAlt: "Slimer eating GIF",
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

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [comparisonExpanded, setComparisonExpanded] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setModalOpen(false);
  };

  return (
    <div className="w-[min(1400px,96vw)] mx-auto py-16 pb-28 flex gap-8">
      <SideNav />

      <main className="flex-1 min-w-0 grid gap-10">
        <HeroSection />

        {/* Playbook 1 — always visible, buttons unchanged */}
        <ContentSection {...playbooks[0]} sectionLabel="Playbook 1" showDemoButton viewOutputUrl="/agentic_marketer_dashboard.html" />

        {/* Playbook 2 — always visible, buttons trigger modal when locked */}
        <ContentSection
          {...playbooks[1]}
          sectionLabel="Playbook 2"
          onButtonClick={!unlocked ? () => setModalOpen(true) : undefined}
        />

        {/* Playbook 3 — Competitor Launch Analyst */}
        <ContentSection
          title="Competitor Launch Analyst"
          description={"You just finished your industry's biggest event of the year. Your competitors all launched new products with web pages, youtube videos, and speaking sessions. Your boss wants a competitive analysis and response by Monday. Here's how to get it done in 15 minutes."}
          videoUrl="https://www.youtube.com/embed/-RQajGOCutY"
          sectionLabel="Playbook 3"
          previewUrl="/enhanced_dashboard.html"
          viewOutputUrl="/enhanced_dashboard.html"
        />

        {/* Playbooks vs Prompts comparison */}
        <section className="glass-section p-7">
          <div className="mb-3 text-sm font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Playbooks vs Prompts
          </div>
          <img
            src="/playbook-vs-prompt.png"
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

        {/* Playbook showcase */}
        <PlaybookShowcase />

        {/* Email gate between playbooks and gated content */}
        {!unlocked && <GateSection onUnlock={handleUnlock} />}

        {/* Gated: ROI Calculator + Playbooks 4 & 5 */}
        <GatedContent unlocked={unlocked} onUnlock={handleUnlock}>
          <div className="grid gap-10">
            <ROICalculator />
            {playbooks.slice(2).map((s, i) => (
              <ContentSection key={i + 2} {...s} sectionLabel={`Playbook ${i + 4}`} />
            ))}
          </div>
        </GatedContent>

        {/* Modal triggered by Playbook 2 buttons */}
        <UnlockModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onUnlock={handleUnlock}
        />
      </main>
    </div>
  );
};

export default Index;
