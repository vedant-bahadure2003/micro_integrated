import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Package,
  Users,
  Award,
  Globe,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const ProductStats = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    products: 0,
    clients: 0,
    certifications: 0,
    countries: 0,
  });

  const finalCounts = {
    products: 25,
    clients: 150,
    certifications: 15,
    countries: 10,
  };

  const stats = [
    {
      id: "products",
      icon: Package,
      label: "Product Solutions",
      value: finalCounts.products,
      suffix: "+",
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "clients",
      icon: Users,
      label: "Satisfied Clients",
      value: finalCounts.clients,
      suffix: "+",
      color: "from-green-600 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: "certifications",
      icon: Award,
      label: "Certifications",
      value: finalCounts.certifications,
      suffix: "+",
      color: "from-orange-600 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      id: "countries",
      icon: Globe,
      label: "Countries Served",
      value: finalCounts.countries,
      suffix: "+",
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  // Animated counter effect
  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      const counters = Object.keys(finalCounts).map((key) => ({
        key,
        current: 0,
        target: finalCounts[key],
        increment: finalCounts[key] / steps,
      }));

      const timer = setInterval(() => {
        let allComplete = true;

        counters.forEach((counter) => {
          if (counter.current < counter.target) {
            counter.current = Math.min(
              counter.current + counter.increment,
              counter.target
            );
            allComplete = false;
          }
        });

        setCounts((prev) => {
          const newCounts = { ...prev };
          counters.forEach((counter) => {
            newCounts[counter.key] = Math.floor(counter.current);
          });
          return newCounts;
        });

        if (allComplete) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={statsRef} className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 mb-4">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">
              Trusted Excellence
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Industry-Leading Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering quality products backed by certifications and trusted by
            clients worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`relative p-6 rounded-2xl ${stat.bgColor} border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="relative mb-1">
                    <motion.div
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                    >
                      {counts[stat.id]}
                      {stat.suffix}
                    </motion.div>
                  </div>

                  {/* Label */}
                  <p className="text-gray-700 font-medium text-sm leading-tight">
                    {stat.label}
                  </p>

                  {/* Progress Bar Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden rounded-b-2xl">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color}`}
                      initial={{ width: "0%" }}
                      animate={
                        isStatsInView ? { width: "100%" } : { width: "0%" }
                      }
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quality Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Quality Assured Products
                </h3>
                <p className="text-sm text-gray-600">
                  All products meet international standards and certifications
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                ISO Certified
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                RDSO Approved
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                CE Compliant
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductStats;
