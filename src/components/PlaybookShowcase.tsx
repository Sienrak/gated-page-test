import { useState } from "react";
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
];

const PlaybookShowcase = () => {
  const [selectedPlaybook, setSelectedPlaybook] = useState<PlaybookDetail | null>(null);

  return (
    <>
      <section className="rounded-[var(--radius)] overflow-hidden p-8 relative"
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1e3a5f 40%, #7c3aed 70%, #ec4899 100%)",
        }}
      >
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-white text-[22px] font-semibold m-0 inline-flex items-center gap-2">
            Playbook showcase
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mb-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.3) transparent" }}
        >
          {showcasePlaybooks.map((pb, i) => (
            <div
              key={i}
              onClick={() => setSelectedPlaybook(pb)}
              className="flex-shrink-0 w-72 bg-white rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-[#fce7f3] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#be185d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2 m-0">{pb.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm m-0 leading-relaxed" style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
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
