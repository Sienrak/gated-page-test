import { Link, useLocation } from "react-router-dom";

const ABToggle = () => {
  const location = useLocation();
  const isB = location.pathname === "/b";

  return (
    <div className="fixed top-4 left-4 z-50 flex rounded-lg overflow-hidden shadow-lg border border-white/20 backdrop-blur-md">
      <Link
        to="/"
        className={`px-4 py-2 text-lg font-bold no-underline transition-colors ${
          !isB
            ? "bg-[#5551ff] text-white"
            : "bg-white/10 text-white/50 hover:text-white hover:bg-white/20"
        }`}
      >
        A
      </Link>
      <Link
        to="/b"
        className={`px-4 py-2 text-lg font-bold no-underline transition-colors ${
          isB
            ? "bg-[#5551ff] text-white"
            : "bg-white/10 text-white/50 hover:text-white hover:bg-white/20"
        }`}
      >
        B
      </Link>
    </div>
  );
};

export default ABToggle;
