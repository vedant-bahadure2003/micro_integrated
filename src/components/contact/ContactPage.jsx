import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@microintegrated.com",
      subdDetail: "We'll respond within 24 hours",
      link: "mailto:info@microintegrated.com",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 7987913708",
      subdDetail: "Mon-Fri from 9am to 6pm",
      link: "tel:+917987913708",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "",
      subdDetail:
        "Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, Kishor Bhagirath Tapadia Road Behind Anand Veg Restaurant, Bhalekar Chawl Erandwane, Pune, Maharashtra – 411004",
      link: "#",
      color: "from-emerald-600 to-teal-500",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday, Sunday", hours: "Closed" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-cyan-500",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Background and Animated SVG */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated SVG Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        {/* Floating Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="2" fill="white" />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="50"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="0"
                  y2="50"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle cx="0" cy="50" r="2" fill="white" />
                <circle cx="100" cy="50" r="2" fill="white" />
                <circle cx="50" cy="0" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let&apos;s Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 pb-2">
                Amazing Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Have a question about our products or services? We&apos;re here to
              help you innovate and transform your ideas into reality.
            </motion.p>
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

      {/* Contact Methods Grid */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-900 font-medium mb-1">
                    {method.detail}
                  </p>
                  <p className="text-sm text-gray-500">{method.subdDetail}</p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute bottom-6 right-6 text-blue-600"
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you
                  shortly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting us. We&apos;ll respond within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300"
                            placeholder="+91 7987913708"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none hover:border-gray-300"
                        placeholder="Tell us more about your project or inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                </div>

                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex justify-between items-center py-3 border-b border-white/20 last:border-0"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-blue-100">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    For urgent inquiries, please call our 24/7 support hotline
                    or use our emergency contact form.
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email Response Time
                      </p>
                      <p className="text-sm text-gray-600">
                        Within 24 hours on business days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Phone Support
                      </p>
                      <p className="text-sm text-gray-600">
                        Available Mon-Fri, 9 AM - 6 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Support Portal
                      </p>
                      <p className="text-sm text-gray-600">
                        24/7 technical documentation access
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  Follow us on social media for the latest updates, news, and
                  insights from our team.
                </p>
              </div> */}

              {/* Back to Home */}
              {/* <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Want to explore more?
                      </p>
                      <p className="text-lg font-bold">Back to Homepage</p>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with Embedded Google Maps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              <span>Find Us Here</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              We&apos;d love to meet you in person! Drop by our office in Pune
              for a consultation or product demonstration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Address Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 flex flex-col justify-center">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600">Erandwane, Pune, Maharashtra</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Address:
                    </span>{" "}
                    Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, Kishor
                    Bhagirath Tapadia Road
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Landmark:
                    </span>{" "}
                    Behind Anand Veg Restaurant, Bhalekar Chawl
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Area:</span>{" "}
                    Erandwane, Pune, Maharashtra – 411004
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                  <Phone className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-xs text-gray-600 mb-1">Call Us</p>
                  <p className="text-sm font-bold text-gray-900">
                    +91 7987913708
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                  <Mail className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-xs text-gray-600 mb-1">Email Us</p>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    info@micro...
                  </p>
                </div>
              </div>

              <motion.a
                href="https://www.google.com/maps/place/Achyut+Prasad+Apartments/@18.5087043,73.830902,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bfed8e1710cd:0x8349a281ee645b59!8m2!3d18.5087043!4d73.8334769!16s%2Fg%2F11fjvzr7yr?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Directions</span>
                <motion.div className="group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px] lg:h-full min-h-[400px]"
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent z-10 rounded-br-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-500/20 to-transparent z-10 rounded-tl-3xl" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.017827895894!2d73.830902!3d18.5087043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfed8e1710cd%3A0x8349a281ee645b59!2sAchyut%20Prasad%20Apartments!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Micro Integrated Semiconductor Systems Office Location"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>

          {/* Additional Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 text-center relative overflow-hidden"
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

            <div className="relative z-10 grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Open Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Phone Support</p>
                  <p className="text-gray-300 text-sm">+91 7987913708</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Email Support</p>
                  <p className="text-gray-300 text-sm">24 hours response</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
