import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrolled / height) * 100;

      setScrollProgress(progress);

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-8 right-8 z-50 group transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 rotate-0"
            : "opacity-0 translate-y-20 scale-0 rotate-180 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        {/* Outer rotating gradient ring */}
        <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-rose-500 rounded-full animate-spin-slow opacity-80 blur-md"></div>

        {/* Middle pulsing ring */}
        <div className="absolute inset-[-2px] bg-gradient-to-tr from-emerald-400 via-cyan-500 to-blue-600 rounded-full animate-pulse-ring"></div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 via-fuchsia-600 to-pink-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-gradient-shift"></div>

        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-70">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${
              2 * Math.PI * 28 * (1 - scrollProgress / 100)
            }`}
            className="transition-all duration-300"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Button content with glassmorphism */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-xl w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 border border-white/20">
          {/* Inner glow */}
          <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>

          {/* Arrow icon with animation */}
          <div
            className={`relative transition-all duration-700 ${
              isHovered ? "translate-y-[-8px] scale-110" : "translate-y-0"
            }`}
          >
            <svg
              className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>

            {/* Sparkles */}
          </div>

          {/* Multiple pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/60 animate-ping-slow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-pink-400/60 animate-ping-slow-delay"></div>
        </div>

        {/* Floating particles */}

        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-[-4px] pointer-events-none">
          <div className="relative px-4 py-2 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white text-sm font-medium rounded-xl whitespace-nowrap shadow-2xl border border-purple-500/30 backdrop-blur-sm">
            <span className="relative z-10 flex items-center gap-2">
              Back to Top
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur"></div>
            <span className="absolute top-full right-8 -mt-1 border-8 border-transparent border-t-purple-900"></span>
          </div>
        </div>
      </button>

      {/* Add custom animations to the document */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
            transform: rotate(0deg);
          }
          50% {
            background-position: 100% 50%;
            transform: rotate(180deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes ping-slow-delay {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slow-delay {
          animation: ping-slow-delay 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 1.5s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 2s ease-out infinite;
        }
      `}</style>
    </>
  );
}

export default ScrollToTopButton;
