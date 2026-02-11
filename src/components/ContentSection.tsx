interface ContentSectionProps {
  title?: string;
  description: string;
  videoUrl: string;
  gifUrl: string;
  gifAlt: string;
}

const ContentSection = ({ title, description, videoUrl, gifUrl, gifAlt }: ContentSectionProps) => {
  return (
    <article className="glass-section p-7">
      <div className="grid gap-[22px] grid-cols-1 lg:grid-cols-[1fr_1.2fr_0.9fr] items-stretch">
        <div className="copy-box flex flex-col">
          {title && (
            <div className="mb-2.5 text-lg font-semibold tracking-[0.04em] uppercase text-[#3c2a46]">
              {title}
            </div>
          )}
          <div className="flex-1">{description}</div>
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
          <img
            src={gifUrl}
            alt={gifAlt}
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </article>
  );
};

export default ContentSection;
