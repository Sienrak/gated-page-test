import { useState } from "react";
import UnlockModal from "./UnlockModal";

interface GatedContentProps {
  unlocked: boolean;
  onUnlock: () => void;
  children: React.ReactNode;
}

const GatedContent = ({ unlocked, onUnlock, children }: GatedContentProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (unlocked) {
    return (
      <div className="animate-in fade-in duration-500">{children}</div>
    );
  }

  return (
    <>
      <div className="relative">
        {/* Clickable overlay */}
        <div
          className="absolute inset-0 z-10 cursor-pointer rounded-[var(--radius)]"
          onClick={() => setModalOpen(true)}
        />
        {/* Blurred + greyed content */}
        <div className="pointer-events-none select-none filter blur-[6px] grayscale opacity-60">
          {children}
        </div>
      </div>

      <UnlockModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUnlock={onUnlock}
      />
    </>
  );
};

export default GatedContent;
