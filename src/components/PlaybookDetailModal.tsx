interface PlaybookDetail {
  title: string;
  description: string;
  byline?: string;
  deliverables?: string[];
  steps?: string[];
  replayUrl?: string;
}

interface PlaybookDetailModalProps {
  open: boolean;
  onClose: () => void;
  playbook: PlaybookDetail | null;
}

const PlaybookDetailModal = ({ open, onClose, playbook }: PlaybookDetailModalProps) => {
  if (!open || !playbook) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-[90vw] max-h-[90vh] overflow-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-[#fce7f3] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[#be185d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 m-0">{playbook.title}</h2>
            {playbook.byline && (
              <p className="text-sm text-gray-500 mt-1 m-0">{playbook.byline}</p>
            )}
          </div>
        </div>

        {/* What it does */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 m-0">What it does</h3>
          <p className="text-gray-600 m-0 leading-relaxed">{playbook.description}</p>
        </div>

        {/* Deliverables */}
        {playbook.deliverables && playbook.deliverables.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 m-0">Deliverables you'll get</h3>
            <div className="grid gap-2">
              {playbook.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Playbook steps */}
        {playbook.steps && playbook.steps.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 m-0">Playbook steps</h3>
            <div className="grid gap-3">
              {playbook.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px] text-gray-400 flex-shrink-0">
                    ▶
                  </span>
                  <span className="text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6 mt-8">
          {playbook.replayUrl && (
            <a
              href={playbook.replayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium no-underline"
            >
              Watch replay
            </a>
          )}
          <button
            type="button"
            className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 border-none cursor-pointer font-medium"
          >
            Try playbook
          </button>
        </div>
      </div>
    </div>
  );
};

export type { PlaybookDetail };
export default PlaybookDetailModal;
