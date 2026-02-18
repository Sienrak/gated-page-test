import { useState } from "react";
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
        <ContentSection {...playbooks[0]} sectionLabel="Playbook 1" showDemoButton />

        {/* Playbook 2 — always visible, buttons trigger modal when locked */}
        <ContentSection
          {...playbooks[1]}
          sectionLabel="Playbook 2"
          onButtonClick={!unlocked ? () => setModalOpen(true) : undefined}
        />

        {/* Playbook showcase — between Playbook 2 and gate */}
        <PlaybookShowcase />

        {/* Email gate between Playbook 2 and gated content */}
        {!unlocked && <GateSection onUnlock={handleUnlock} />}

        {/* Gated: ROI Calculator + Playbooks 3 & 4 */}
        <GatedContent unlocked={unlocked} onUnlock={handleUnlock}>
          <div className="grid gap-10">
            <ROICalculator />
            {playbooks.slice(2).map((s, i) => (
              <ContentSection key={i + 2} {...s} sectionLabel={`Playbook ${i + 3}`} />
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
