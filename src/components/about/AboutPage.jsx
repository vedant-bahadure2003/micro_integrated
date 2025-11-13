import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Zap,
  Shield,
  Eye,
  Users,
  Award,
  Lightbulb,
  TrendingUp,
  Globe,
  Heart,
  Cpu,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const achievementsRef = useRef(null);
  const isAchievementsInView = useInView(achievementsRef, {
    once: true,
    margin: "-100px",
  });

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "Delivering cutting-edge Semiconductor systems that power the future of technology and innovation.",
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Constantly pushing boundaries with breakthrough technologies and forward-thinking approaches.",
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Maintaining the highest standards in every product, ensuring reliability and excellence.",
      color: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Eye,
      title: "Customer Focus",
      description:
        "Building lasting relationships through exceptional service and tailored solutions.",
      color: "from-orange-600 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "Started our journey with a vision to revolutionize Semiconductor technology.",
      icon: Rocket,
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Expanded operations globally, serving clients across 25+ countries.",
      icon: Globe,
    },
    {
      year: "2020",
      title: "Innovation",
      description:
        "Launched groundbreaking VOCOxP technology, setting new industry standards.",
      icon: Lightbulb,
    },
    {
      year: "2025",
      title: "Leadership",
      description:
        "Recognized as industry leaders with successful implementations.",
      icon: Award,
    },
  ];

  const achievements = [
    {
      number: "25+",
      label: "Countries Served",
      icon: Globe,
      color: "text-purple-600",
    },
    {
      number: "150+",
      label: "Team Members",
      icon: Users,
      color: "text-emerald-600",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "text-orange-600",
    },
  ];

  const teamValues = [
    {
      title: "Expert Team",
      description:
        "Industry-leading professionals with decades of combined experience",
      icon: Users,
    },
    {
      title: "Innovation Lab",
      description: "State-of-the-art R&D facilities driving next-gen solutions",
      icon: Cpu,
    },
    {
      title: "Global Reach",
      description: "Worldwide presence with local support and expertise",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animated SVG Background */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      >
        {/* Animated Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hexagons"
                width="100"
                height="87"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M25 0L50 14.43L50 43.3L25 57.74L0 43.3L0 14.43L25 0Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <path
                  d="M75 0L100 14.43L100 43.3L75 57.74L50 43.3L50 14.43L75 0Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <path
                  d="M25 57.74L50 72.17L50 101.04L25 115.48L0 101.04L0 72.17L25 57.74Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1.2, 1.4, 1.2],
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1.2, 1.5, 1.2],
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
        />

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${(i * 73) % 100}%`,
                top: `${(i * 47) % 100}%`,
              }}
              animate={{
                y: [-50, -150],
                opacity: [2, 2, 2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
              className="w-1 h-1 bg-cyan-400 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Innovating the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 pb-2">
                Semiconductor Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Since 2010, we've been pioneering breakthrough solutions in
              Semiconductor technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/#products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Our Products
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  is a company that provides services related to embedded system
                  development and electronic product design. We service our
                  clients with qualitative and well-executed software
                  development, BPO and Engineering services.
                </p>
                <p>
                  Company provides on-demand hardware development, on-demand
                  software development, migration and integration services for
                  embedded software, hardware and software selection consulting,
                  testing and quality assurance services.
                </p>
                <p>
                  We cover the full software development life cycle from
                  business analysis to quality assurance and deployment. For a
                  client, this means there is one vendor handling the job.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {teamValues.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-5 shadow-2xl">
                <div className="w-full h-80 overflow-hidden rounded-2xl">
                  <img
                    src="https://img.freepik.com/premium-photo/digital-trophy-award-achievement-success-victory_1249710-7003.jpg"
                    alt="Semiconductor technology innovation"
                    className="w-full h-full object-cover"
                  />
                </div>{" "}
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <Award className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our path to becoming industry leaders
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative shrink-0 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl z-10 relative"
                    >
                      <milestone.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section
        ref={achievementsRef}
        className="py-24 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="achievements-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="white" />
                <circle cx="0" cy="0" r="2" fill="white" />
                <circle cx="60" cy="0" r="2" fill="white" />
                <circle cx="0" cy="60" r="2" fill="white" />
                <circle cx="60" cy="60" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#achievements-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievement Highlights
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isAchievementsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <achievement.icon
                  className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isAchievementsInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-5xl font-bold mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-blue-100 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-2 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies worldwide who trust us for their
              Semiconductor systems. Let&apos;s build the future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Contact Us Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/#products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Explore Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
