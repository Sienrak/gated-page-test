import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SideNav = () => {
  const [functionOpen, setFunctionOpen] = useState(false);

  const navItems = [
    { label: "Intro to Playbooks", id: "intro" },
    { label: "Playbooks vs Prompts", id: "playbooks-vs-prompts" },
  ];

  const functionSubItems = [
    { label: "Content", id: "content" },
    { label: "Demand Gen", id: "demand-gen" },
    { label: "Field", id: "field" },
    { label: "Social", id: "social" },
  ];

  return (
    <nav className="sticky top-8 self-start w-56 flex-shrink-0 hidden lg:block">
      <div className="glass-section p-5 grid gap-1">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
          Chapters
        </div>

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-white/60 hover:text-foreground transition-colors no-underline"
          >
            {item.label}
          </a>
        ))}

        {/* Expandable section */}
        <button
          type="button"
          onClick={() => setFunctionOpen(!functionOpen)}
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-white/60 hover:text-foreground transition-colors cursor-pointer bg-transparent border-none text-left"
        >
          <span>Playbooks by function</span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
              functionOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            functionOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-3 grid gap-0.5">
            {functionSubItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:bg-white/60 hover:text-foreground transition-colors no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
