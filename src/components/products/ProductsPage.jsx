import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Radio,
  Fingerprint,
  Shield,
  MonitorPlay,
  Thermometer,
  ArrowRight,
  Search,
  Sparkles,
  Award,
  CheckCircle2,
  Package,
  Download,
  Mail,
  Phone,
  FileText,
  Play,
  Boxes,
  Scan,
  Layers,
} from "lucide-react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ProductStats from "./ProductStats";

const ProductsPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const productsRef = useRef(null);
  const isProductsInView = useInView(productsRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      icon: Radio,
      title: "VOCOxP",
      tagline: "Digital Verification & Communication Platform",
      description:
        "Advanced verification system for secure digital communication and data validation in government and industrial applications.",
      longDescription:
        "VOCOxP is a comprehensive digital verification and communication platform designed to meet the stringent requirements of government and industrial sectors. It provides end-to-end encryption, real-time verification capabilities, and seamless integration with existing infrastructure. The platform supports multiple communication channels and ensures compliance with industry standards.",
      category: "communication",
      color: "from-blue-600 to-cyan-500",
      features: [
        "Secure Communication",
        "Real-time Verification",
        "Multi-platform Support",
        "End-to-end Encryption",
        "Compliance Ready",
        "API Integration",
      ],
      specifications: {
        deployment: "Cloud/On-Premise",
        protocols: "HTTPS, WebSocket, MQTT",
        authentication: "Multi-factor",
        scalability: "Horizontal",
      },
      applications: [
        "Government Services",
        "Financial Institutions",
        "Healthcare Systems",
        "Corporate Communications",
      ],
      certifications: ["ISO 27001", "SOC 2", "GDPR Compliant"],
      image: "/portal/homepage/vocoxp-image.png",
      brochure: "/downloads/vocoxp-brochure.pdf",
      video: "https://demo.vocoxp.com/video",
    },
    {
      id: 2,
      icon: Scan,
      title: "3D Point Cloud",
      tagline: "Advanced Spatial Data Visualization & Analysis",
      description:
        "Powerful desktop application for high-precision 3D point cloud visualization, measurement, and analysis of spatial assets with real-time progress monitoring.",
      longDescription:
        "Our company specializes in advanced 3D Point Cloud Data solutions, delivering a powerful desktop application for high-precision visualization, measurement, and analysis of spatial assets. Our platform enables seamless progress and work monitoring, supporting accurate change detection over time to track development and identify variations across projects. Designed for industries such as roadways and railways asset management, water body analysis, construction progress monitoring, and land acquisition, our solution empowers engineers, surveyors, and project managers with actionable insights from 3D spatial data—enhancing decision-making, efficiency, and project transparency.",
      category: "spatial",
      color: "from-yellow-600 to-green-500",
      features: [
        "High-Precision Visualization",
        "Real-time Measurement Tools",
        "Change Detection Analysis",
        "Construction Progress Monitoring",
        "Roadways and Railways Asset Management ",
        "3D Spatial Analytics",
      ],
      specifications: {
        format_support: ".las, .laz, .ply",
        precision: "Sub-centimeter",
        rendering: "GPU Accelerated",
        data_capacity: "Billions of points",
      },
      applications: [
        "Roadway Asset Management",
        "Railway Infrastructure",
        "Water Body Analysis",
        "Construction Progress Monitoring",
        "Land Acquisition & Survey",
        "Urban Town Planning",
      ],
      certifications: ["ISO 9001", "Survey Grade Accuracy", "BIM Compatible"],
      image: "/portal/homepage/Foot-Over-Bridge.png",
      brochure: "/downloads/3d-point-cloud-brochure.pdf",
      video: "https://demo.3d-pointcloud.com/video",
    },
    // {
    //   id: 3,
    //   icon: Fingerprint,
    //   title: "Token Issuing System",
    //   tagline: "Palm Vein-Based Authentication",
    //   description:
    //     "Cutting-edge biometric token management system using palm vein recognition technology for maximum security.",
    //   longDescription:
    //     "Our Token Issuing System leverages advanced palm vein recognition technology, which is more secure and hygienic than traditional fingerprint-based systems. The contactless biometric solution ensures accurate identification while maintaining the highest security standards. The system is designed for high-traffic environments requiring robust authentication.",
    //   category: "biometric",
    //   color: "from-purple-600 to-pink-500",
    //   features: [
    //     "Biometric Security",
    //     "Token Management",
    //     "Indicator System",
    //     "Contactless Recognition",
    //     "High Accuracy Rate",
    //     "Anti-spoofing Technology",
    //   ],
    //   specifications: {
    //     accuracy: "99.9%+",
    //     speed: "< 1 second",
    //     capacity: "100,000+ users",
    //     interface: "USB/Network",
    //   },
    //   applications: [
    //     "Access Control Systems",
    //     "Banking & ATMs",
    //     "Government ID Systems",
    //     "Corporate Security",
    //   ],
    //   certifications: ["FBI Certified", "ISO 19794", "STQC Approved"],
    //   image: "/portal/homepage/woman-enjoying-vr-headset.jpg",
    //   brochure: "/downloads/token-system-brochure.pdf",
    //   video: "https://demo.token-system.com/video",
    // },
    // {
    //   id: 4,
    //   icon: Shield,
    //   title: "SIGNSAFE",
    //   tagline: "Crew Authentication & Analysis",
    //   description:
    //     "Railway crew authentication system with integrated breath analysis for enhanced safety and compliance.",
    //   longDescription:
    //     "SIGNSAFE is a comprehensive crew authentication and safety compliance system specifically designed for railway operations. It combines biometric authentication with breath analysis to ensure crew fitness before duty. The system maintains detailed logs for audit compliance and integrates seamlessly with railway management systems.",
    //   category: "railway",
    //   color: "from-emerald-600 to-teal-500",
    //   features: [
    //     "Crew Authentication",
    //     "Breath Analysis",
    //     "Safety Compliance",
    //     "Duty Roster Integration",
    //     "Audit Trail Management",
    //     "Real-time Alerts",
    //   ],
    //   specifications: {
    //     authentication: "Multi-modal Biometric",
    //     analysis: "Alcohol Detection",
    //     response_time: "< 3 seconds",
    //     logging: "Tamper-proof",
    //   },
    //   applications: [
    //     "Railway Operations",
    //     "Metro Systems",
    //     "Mining Operations",
    //     "Industrial Transport",
    //   ],
    //   certifications: ["RDSO Approved", "ISO 9001", "CE Certified"],
    //   image:
    //     "/portal/homepage/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg",
    //   brochure: "/downloads/signsafe-brochure.pdf",
    //   video: "https://demo.signsafe.com/video",
    // },
    // {
    //   id: 5,
    //   icon: MonitorPlay,
    //   title: "Three Phase Loco Driver Desk",
    //   tagline: "Realistic Training Simulator",
    //   description:
    //     "State-of-the-art three-phase locomotive driver training simulator for comprehensive skill development.",
    //   longDescription:
    //     "Our Three Phase Loco Driver Desk is a high-fidelity training simulator that replicates real-world locomotive operations with exceptional accuracy. The system provides immersive training scenarios, performance analytics, and certification-ready assessment tools. It reduces training costs while improving driver competency and safety awareness.",
    //   category: "training",
    //   color: "from-orange-600 to-red-500",
    //   features: [
    //     "Realistic Simulation",
    //     "Training Analytics",
    //     "Performance Tracking",
    //     "Multiple Scenarios",
    //     "Visual & Audio Feedback",
    //     "Certification Module",
    //   ],
    //   specifications: {
    //     scenarios: "100+ Pre-configured",
    //     graphics: "High-definition 3D",
    //     controls: "Authentic Replicas",
    //     monitoring: "Real-time",
    //   },
    //   applications: [
    //     "Railway Training Centers",
    //     "Locomotive Operator Training",
    //     "Competency Assessment",
    //     "Refresher Training",
    //   ],
    //   certifications: ["RDSO Approved", "ISO 9001", "IRS Compliant"],
    //   image:
    //     "/portal/homepage/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg",
    //   brochure: "/downloads/loco-driver-desk-brochure.pdf",
    //   video: "https://demo.loco-simulator.com/video",
    // },
    // {
    //   id: 6,
    //   icon: Thermometer,
    //   title: "Traction Motor Testing",
    //   tagline: "Temperature Monitoring System",
    //   description:
    //     "Smart temperature recording and analysis system for traction motor performance optimization and maintenance.",
    //   longDescription:
    //     "Our Traction Motor Testing system provides comprehensive temperature monitoring and analysis for railway traction motors. The system employs advanced sensors and AI-powered analytics to predict maintenance needs, optimize performance, and prevent failures. Real-time monitoring ensures operational efficiency and extends equipment lifespan.",
    //   category: "testing",
    //   color: "from-indigo-600 to-blue-500",
    //   features: [
    //     "Temperature Recording",
    //     "Data Analysis",
    //     "Predictive Maintenance",
    //     "Multi-point Monitoring",
    //     "Wireless Connectivity",
    //     "Historical Data Analytics",
    //   ],
    //   specifications: {
    //     sensors: "16-channel",
    //     accuracy: "±0.1°C",
    //     range: "-40°C to 200°C",
    //     sampling: "100Hz",
    //   },
    //   applications: [
    //     "Traction Motor Testing",
    //     "Locomotive Maintenance",
    //     "Performance Optimization",
    //     "Quality Assurance",
    //   ],
    //   certifications: ["RDSO Approved", "ISO 17025", "NABL Accredited"],
    //   image: "/portal/homepage/woman-enjoying-vr-headset.jpg",
    //   brochure: "/downloads/motor-testing-brochure.pdf",
    //   video: "https://demo.motor-testing.com/video",
    // },
  ];

  const categories = [
    {
      id: "all",
      name: "All Products",
      icon: Package,
      count: products.length,
      description: "Complete product portfolio",
    },
    {
      id: "communication",
      name: "Communication",
      icon: Radio,
      count: products.filter((p) => p.category === "communication").length,
      description: "Digital platforms",
    },
    // {
    //   id: "biometric",
    //   name: "Biometric Systems",
    //   icon: Fingerprint,
    //   count: products.filter((p) => p.category === "biometric").length,
    //   description: "Authentication solutions",
    // },
    // {
    //   id: "railway",
    //   name: "Railway Solutions",
    //   icon: Shield,
    //   count: products.filter((p) => p.category === "railway").length,
    //   description: "Railway systems",
    // },
    // {
    //   id: "training",
    //   name: "Training Systems",
    //   icon: MonitorPlay,
    //   count: products.filter((p) => p.category === "training").length,
    //   description: "Simulation & training",
    // },
    // {
    //   id: "testing",
    //   name: "Testing Equipment",
    //   icon: Thermometer,
    //   count: products.filter((p) => p.category === "testing").length,
    //   description: "Quality assurance",
    // },
    {
      id: "spatial",
      name: "Spatial Solutions",
      icon: Scan,
      count: products.filter((p) => p.category === "spatial").length,
      description: "3D visualization & analysis",
    },
  ];

  // Filter products based on category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium">
                Premium Solutions
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Innovative Semiconductor-based solutions for automation,
              verification, and railway systems
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("products")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border border-gray-400 text-gray-300 hover:text-white hover:border-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Catalog</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="relative block w-full h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
              fill="#f9fafb"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      {/* <ProductStats /> */}

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions backed by cutting-edge technology and
              industry expertise
            </p>
          </motion.div>

          {/* Filter and Search */}
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            isInView={isProductsInView}
          />

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProductsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                custom={index}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center py-20"
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Products Found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your filters or search terms to find more
                products.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
              Contact our team to discuss your requirements and find the perfect
              solution for your needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Request Quote</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Today</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
