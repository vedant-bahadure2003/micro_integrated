import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radio,
  Fingerprint,
  Shield,
  MonitorPlay,
  Thermometer,
  ArrowRight,
} from "lucide-react";

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Radio,
      title: "VOCOxP",
      tagline: "Digital Verification & Communication Platform",
      description:
        "Advanced verification system for secure digital communication and data validation in government and industrial applications.",
      color: "from-blue-600 to-cyan-500",
      features: [
        "Secure Communication",
        "Real-time Verification",
        "Multi-platform Support",
      ],
    },
    {
      icon: Fingerprint,
      title: "Token Issuing System",
      tagline: "Palm Vein-Based Authentication",
      description:
        "Cutting-edge biometric token management system using palm vein recognition technology for maximum security.",
      color: "from-purple-600 to-pink-500",
      features: ["Biometric Security", "Token Management", "Indicator System"],
    },
    {
      icon: Shield,
      title: "SIGNSAFE",
      tagline: "Crew Authentication & Analysis",
      description:
        "Railway crew authentication system with integrated breath analysis for enhanced safety and compliance.",
      color: "from-emerald-600 to-teal-500",
      features: ["Crew Authentication", "Breath Analysis", "Safety Compliance"],
    },
    {
      icon: MonitorPlay,
      title: "Three Phase Loco Driver Desk",
      tagline: "Realistic Training Simulator",
      description:
        "State-of-the-art three-phase locomotive driver training simulator for comprehensive skill development.",
      color: "from-orange-600 to-red-500",
      features: [
        "Realistic Simulation",
        "Training Analytics",
        "Performance Tracking",
      ],
    },
    {
      icon: Thermometer,
      title: "Traction Motor Testing",
      tagline: "Temperature Monitoring System",
      description:
        "Smart temperature recording and analysis system for traction motor performance optimization and maintenance.",
      color: "from-indigo-600 to-blue-500",
      features: [
        "Temperature Recording",
        "Data Analysis",
        "Predictive Maintenance",
      ],
    },
  ];

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-50 rounded-full blur-3xl opacity-30" />

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
            <span>Our Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Innovative Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Modern Industries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our comprehensive suite of Semiconductor-based products
            designed to empower industries with cutting-edge automation and
            verification capabilities.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <product.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">
                  {product.tagline}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 text-sm font-semibold bg-gradient-to-r ${product.color} text-transparent bg-clip-text group-hover:gap-3 transition-all duration-300`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}

          {/* View All Products Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * products.length, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Explore All Products</h3>
              <p className="text-blue-100 mb-6">
                Discover more innovative solutions and services
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold"
              >
                <span>View Catalog</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
