import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ROICalculator from "@/components/ROICalculator";
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

  return (
    <main className="w-[min(1200px,92vw)] mx-auto py-16 pb-28 grid gap-10">
      <HeroSection onUnlock={() => setUnlocked(true)} />

      {unlocked && (
        <div className="grid gap-7 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {playbooks.slice(0, 2).map((s, i) => (
            <ContentSection key={i} {...s} sectionLabel={`Playbook ${i + 1}`} />
          ))}
          <ROICalculator />
          {playbooks.slice(2).map((s, i) => (
            <ContentSection key={i + 2} {...s} sectionLabel={`Playbook ${i + 3}`} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Index;
