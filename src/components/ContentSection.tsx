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
      <div className="grid gap-[22px] grid-cols-1 lg:grid-cols-[minmax(220px,1fr)_minmax(260px,1.2fr)_minmax(220px,0.9fr)] items-start">
        <div className="copy-box">
          {title && (
            <div className="mb-2.5 text-lg font-semibold tracking-[0.04em] uppercase text-[#3c2a46]">
              {title}
            </div>
          )}
          {description}
        </div>
        <div className="media-frame">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full border-0 block aspect-video"
          />
        </div>
        <div className="gif-frame">
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
