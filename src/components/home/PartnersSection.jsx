"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Factory, Train, Globe, Shield, Cog } from "lucide-react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { icon: Train, name: "Railway Authorities" },
    { icon: Building2, name: "Government Agencies" },
    { icon: Factory, name: "Industrial Corp" },
    { icon: Globe, name: "Global Tech Inc" },
    { icon: Shield, name: "Defense Systems" },
    { icon: Cog, name: "Manufacturing Ltd" },
    { icon: Train, name: "Metro Services" },
    { icon: Building2, name: "Public Sector" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-50/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-cyan-50/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>Trusted Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Worldwide
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Collaborating with leading organizations across government,
            railways, and industrial sectors to deliver cutting-edge solutions.
          </motion.p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden mb-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex space-x-8"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="shrink-0 w-64 h-40 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-center px-4">
                    {partner.name}
                  </p>
                  <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex space-x-8"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="shrink-0 w-64 h-40 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-center px-4">
                    {partner.name}
                  </p>
                  <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "200+", label: "Partners" },
            { value: "50+", label: "Countries" },
            { value: "1000+", label: "Projects" },
            { value: "98%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={stat.label}>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
