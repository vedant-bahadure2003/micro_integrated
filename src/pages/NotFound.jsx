import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-float-slow-delay"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow-delay-2"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-20 h-20 border-2 border-cyan-400/30 rounded-lg animate-spin-slow-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-32 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-spin-reverse-float"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${
              mousePosition.y * -0.3
            }px)`,
          }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-24 h-24 border-2 border-pink-400/30 rotate-45 animate-pulse-float"
          style={{
            transform: `translate(${mousePosition.x * 0.7}px, ${
              mousePosition.y * 0.7
            }px) rotate(45deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-12 h-12 border-2 border-blue-400/30 rounded-lg animate-bounce-slow"
          style={{
            transform: `translate(${mousePosition.x * -0.5}px, ${
              mousePosition.y * -0.5
            }px)`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* 404 Text with glitch effect */}
        <div className="relative mb-8">
          <h1
            className={`text-[12rem] md:text-[16rem] font-black leading-none mt-16 ${
              glitchActive ? "glitch" : ""
            }`}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse-glow"></span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                404
              </span>
            </span>
          </h1>

          {/* Glitch layers */}
          {glitchActive && (
            <>
              <h1 className="absolute inset-0 text-[12rem] md:text-[16rem] font-black leading-none text-cyan-400 opacity-70 animate-glitch-1">
                404
              </h1>
              <h1 className="absolute inset-0 text-[12rem] md:text-[16rem] font-black leading-none text-pink-400 opacity-70 animate-glitch-2">
                404
              </h1>
            </>
          )}
        </div>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up-delay">
            The page you're looking for seems to have ventured into the digital
            void. Don't worry, we'll help you find your way back!
          </p>
        </div>

        {/* Animated icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Rotating rings */}
            <div className="absolute inset-0 w-32 h-32 -m-16">
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 border-2 border-pink-400/30 rounded-full animate-spin-slow"></div>
            </div>

            {/* Broken link icon */}
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-xl w-32 h-32 rounded-full shadow-2xl flex items-center justify-center border border-white/20 animate-float-gentle">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md animate-pulse"></div>
              <svg
                className="w-16 h-16 text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className="text-red-400"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
          <Link
            to="/"
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-xy"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            <span className="relative flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </span>
          </Link>

          <Link
            to="/products"
            className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-purple-500/50 hover:border-purple-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <span className="flex items-center gap-2">
              Explore Products
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Fun error code */}
        <div className="mt-12 text-gray-600 text-sm font-mono animate-fade-in">
          <p>ERROR_CODE: PAGE_NOT_FOUND_0x404</p>
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

        @keyframes spin-slow-float {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-float {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-float {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(5px, -5px);
          }
          40% {
            transform: translate(5px, 5px);
          }
          60% {
            transform: translate(-5px, -5px);
          }
          80% {
            transform: translate(-5px, 5px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
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

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slow-delay {
          animation: float-slow-delay 10s ease-in-out infinite;
        }

        .animate-float-slow-delay-2 {
          animation: float-slow-delay-2 9s ease-in-out infinite;
        }

        .animate-spin-slow-float {
          animation: spin-slow-float 20s linear infinite;
        }

        .animate-spin-reverse-float {
          animation: spin-reverse-float 15s linear infinite;
        }

        .animate-pulse-float {
          animation: pulse-float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-glitch-1 {
          animation: glitch-1 0.2s ease-in-out;
        }

        .animate-glitch-2 {
          animation: glitch-2 0.2s ease-in-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default NotFound;
