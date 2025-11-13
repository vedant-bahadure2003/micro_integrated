import { useState, useEffect } from "react";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Hide loader after content loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-xl bg-white/10 transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float-slow-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-float-slow-delay-2"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated logo/spinner */}
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-spin-fast opacity-80 blur-sm"></div>

          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-500 to-blue-600 animate-spin-reverse opacity-90 blur-sm"></div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse-gentle">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md"></div>

            {/* Logo or Icon */}
            <div className="relative">
              <svg
                className="w-12 h-12 text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.9)] animate-pulse-glow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          {/* Rotating particles */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.8)]"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute top-1/2 left-0 w-2 h-2 -mt-1 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
          </div>
        </div>

        {/* Loading text with gradient */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Loading...
          </h2>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
            </div>
          </div>

          {/* Progress percentage */}
          <span className="text-sm text-gray-400 font-medium tabular-nums">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>

        {/* Floating dots indicator */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(192,132,252,0.6)]"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(244,114,182,0.6)]"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-slow-delay {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(0.9);
          }
          66% {
            transform: translate(30px, -20px) scale(1.1);
          }
        }

        @keyframes float-slow-delay-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(25px, 35px) scale(1.05);
          }
          66% {
            transform: translate(-30px, -25px) scale(0.95);
          }
        }

        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.9));
          }
          50% {
            opacity: 0.8;
            filter: drop-shadow(0 0 20px rgba(168, 85, 247, 1));
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slow-delay {
          animation: float-slow-delay 10s ease-in-out infinite;
        }

        .animate-float-slow-delay-2 {
          animation: float-slow-delay-2 9s ease-in-out infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 2s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-fast 4s linear infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loader;
