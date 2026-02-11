import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ROICalculator from "@/components/ROICalculator";
import googExplosion from "@/assets/goog-explosion.gif";

const sections = [
  {
    title: "5 ways to avoid workslop",
    description:
      "In this video, we'll show you an agent that turns a single rich piece of content into dozens of assets for a multi-channel campaign. Along the way we'll explore the five key rules we use at WRITER to avoid workslop.",
    videoUrl: "https://www.youtube.com/embed/v2dHPwqwFAg?si=bAX4WH_-4ASjwh2X",
    gifUrl: "https://media1.tenor.com/m/xti0oGwDIGAAAAAd/slimer-ghostbusters.gif",
    gifAlt: "Slimer eating GIF",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet sapien non velit egestas, in dignissim lorem gravida. Maecenas placerat felis at gravida fringilla.",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    gifUrl: "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif",
    gifAlt: "AI workflow GIF",
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
          {sections.map((s, i) => (
            <ContentSection key={i} {...s} />
          ))}
          <ROICalculator />
        </div>
      )}
    </main>
  );
};

export default Index;
