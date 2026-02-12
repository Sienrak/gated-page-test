import { useState } from "react";
import { ListTodo, ArrowRight } from "lucide-react";
import PlaybookDetailModal from "./PlaybookDetailModal";
import type { PlaybookDetail } from "./PlaybookDetailModal";

const showcasePlaybooks: PlaybookDetail[] = [
  {
    title: "AEO & GEO readiness report",
    description:
      "Evaluate your website's AEO/GEO readiness and produce a report with actionable recommendations.",
    byline: "By WRITER",
    deliverables: ["AEO/GEO assessment report"],
    steps: [
      "Research AEO and GEO trends",
      "Analyze website crawl data",
      "Evaluate readiness and generate report",
    ],
    replayUrl:
      "https://app.writer.com/share/writer-agent/2b98855c-a35c-4654-8cee-9f99784647ff",
  },
  {
    title: "Competitor launch analysis",
    description:
      "Analyze a competitor's launch announcement in an interactive dashboard.",
    byline: "By WRITER",
    deliverables: ["Competitive analysis dashboard"],
    steps: [
      "Gather competitor launch data",
      "Analyze positioning and messaging",
      "Generate interactive dashboard",
    ],
  },
  {
    title: "Derivative content from webinar",
    description:
      "Transform a webinar into derivative content for blog, social, and the field using just the transcript.",
    byline: "By WRITER",
    deliverables: ["Blog post", "Social media posts", "Field enablement brief"],
    steps: [
      "Process webinar transcript",
      "Extract key themes and quotes",
      "Generate derivative content assets",
    ],
  },
  {
    title: "Industry news digest",
    description:
      "Aggregate news on a specific topic or industry and summarize it in a daily email digest.",
    byline: "By WRITER",
    deliverables: ["Daily email digest"],
    steps: [
      "Scan industry news sources",
      "Filter and rank by relevance",
      "Compile and format digest email",
    ],
  },
  {
    title: "Competitive positioning brief",
    description:
      "Analyze your website against competitors' and create a strategic positioning brief.",
    byline: "By WRITER",
    deliverables: ["Strategic positioning brief"],
    steps: [
      "Crawl competitor websites",
      "Compare messaging and positioning",
      "Generate strategic brief",
    ],
  },
];

const PlaybookShowcase = () => {
  const [selectedPlaybook, setSelectedPlaybook] = useState<PlaybookDetail | null>(null);

  return (
    <>
      <section
        className="pt-7 pb-5 rounded-xl bg-black overflow-hidden relative"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.7) 0%, transparent 50%),
            radial-gradient(ellipse at top right, rgba(124, 58, 237, 0.5) 10%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(251, 146, 60, 0.4) 0%, transparent 40%),
            linear-gradient(135deg, #000 0%, #0a0a0a 100%)
          `,
        }}
      >
        {/* Title button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer ml-6 mb-7 text-[16px] text-white font-medium"
        >
          Playbook showcase
          <ArrowRight className="w-3 h-3" strokeWidth={3} />
        </button>

        {/* Cards */}
        <div className="flex flex-nowrap gap-5 px-6 overflow-x-auto">
          {showcasePlaybooks.map((pb, i) => (
            <div
              key={i}
              onClick={() => setSelectedPlaybook(pb)}
              className="basis-[260px] w-[260px] h-[230px] grow-0 shrink-0 border border-gray-200 rounded-xl p-4 mb-9 bg-white cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-pink-100 rounded-lg p-2 flex items-center justify-center mb-3">
                <ListTodo className="w-5 h-5" />
              </div>

              {/* Title */}
              <h4 className="text-[1rem] leading-[160%] font-medium m-0 mb-1">
                {pb.title}
              </h4>

              {/* Description */}
              <p
                className="text-[16px] leading-6 m-0 text-gray-600"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {pb.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PlaybookDetailModal
        open={selectedPlaybook !== null}
        onClose={() => setSelectedPlaybook(null)}
        playbook={selectedPlaybook}
      />
    </>
  );
};

export default PlaybookShowcase;
