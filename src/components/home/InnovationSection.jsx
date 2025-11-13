import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Layers, Network, Database, Shield } from "lucide-react";

const InnovationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { icon: Cpu, name: "Embedded Systems", delay: 0 },
    { icon: Network, name: "IoT Integration", delay: 0.1 },
    { icon: Database, name: "Data Analytics", delay: 0.2 },
    { icon: Shield, name: "Security Protocols", delay: 0.3 },
    { icon: Layers, name: "System Architecture", delay: 0.4 },
    { icon: Zap, name: "Performance Optimization", delay: 0.5 },
  ];

  return (
    <section
      id="innovation"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-cyan-300 text-sm font-semibold mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Innovation & Technology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empowering Industries Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Intelligent Systems
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Leveraging cutting-edge Semiconductor technology and advanced
            engineering to deliver solutions that transform industries and drive
            digital innovation.
          </motion.p>
        </div>

        {/* Central Visual Element */}
        <div className="flex items-center justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Central Core */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50"
            >
              <div className="w-40 h-40 rounded-full bg-gray-900 flex items-center justify-center">
                <Cpu className="w-20 h-20 text-cyan-400" />
              </div>
            </motion.div>

            {/* Orbiting Rings */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full border-2 border-blue-500/30" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-80 h-80 rounded-full border border-cyan-500/20" />
            </motion.div>

            {/* Connection Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={angle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0.3, 0.7, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-blue-500 to-transparent origin-left"
                style={{ transform: `rotate(${angle}deg)` }}
              />
            ))}
          </motion.div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: tech.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "99.9%", label: "System Uptime" },
            { value: "50ms", label: "Response Time" },
            { value: "256-bit", label: "Encryption" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;
