import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ContentSectionProps {
  title?: string;
  description: string;
  videoUrl: string;
  gifUrl?: string;
  gifAlt?: string;
  sectionLabel?: string;
  expandedText?: string;
  onButtonClick?: () => void;
  showDemoButton?: boolean;
  viewOutputUrl?: string;
  previewUrl?: string;
}

const ContentSection = ({ title, description, videoUrl, gifUrl, gifAlt, sectionLabel, expandedText, onButtonClick, showDemoButton, viewOutputUrl, previewUrl }: ContentSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="glass-section p-7">
      {sectionLabel && (
        <div className="mb-3 text-sm font-semibold tracking-[0.08em] uppercase text-muted-foreground">
          {sectionLabel}
        </div>
      )}
      <div className="grid gap-[22px] grid-cols-1 lg:grid-cols-[1fr_1.2fr_0.9fr] items-stretch">
        <div className="copy-box flex flex-col">
          {title && (
            <div className="mb-2.5 text-lg font-semibold tracking-[0.04em] uppercase text-[#3c2a46]">
              {title}
            </div>
          )}
          <div className="flex-1 whitespace-pre-line">{description}</div>
        </div>
        <div className="media-frame flex flex-col">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full border-0 block flex-1 min-h-[220px]"
          />
        </div>
        <div className="gif-frame !aspect-auto">
          {previewUrl ? (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative group"
            >
              <iframe
                src={previewUrl}
                title="Dashboard preview"
                className="w-full h-full border-0 pointer-events-none"
                style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-sm font-medium px-4 py-2 rounded-full">
                  Open dashboard ↗
                </span>
              </div>
            </a>
          ) : gifUrl ? (
            <img
              src={gifUrl}
              alt={gifAlt}
              className="w-full h-full object-cover block"
            />
          ) : null}
        </div>
      </div>

      {expandedText && (
        <div className="flex flex-col items-center mt-4">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60 hover:bg-secondary transition-colors cursor-pointer border-none"
            aria-label={expanded ? "Collapse section" : "Expand section"}
          >
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                expanded ? "rotate-180" : "animate-bounce"
              }`}
            />
          </button>
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0"
            }`}
          >
            <div className="whitespace-pre-line text-foreground/80">
              {expandedText}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-5">
        <button
          type="button"
          onClick={onButtonClick}
          className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 text-primary-foreground"
          style={{ background: "var(--gradient-primary)", boxShadow: "0 16px 30px rgba(234, 213, 254, 0.45)" }}
        >
          Get the playbook
        </button>
        {viewOutputUrl ? (
          <a
            href={viewOutputUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 bg-secondary text-secondary-foreground no-underline inline-block"
          >
            View Output
          </a>
        ) : (
          <button
            type="button"
            onClick={onButtonClick}
            className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 bg-secondary text-secondary-foreground"
          >
            View sample
          </button>
        )}
        {showDemoButton && (
          <button
            type="button"
            className="rounded-full px-[22px] py-[14px] font-semibold text-[15px] border-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 text-white"
            style={{ background: "#5551ff" }}
          >
            Request a demo
          </button>
        )}
      </div>
    </article>
  );
};

export default ContentSection;
