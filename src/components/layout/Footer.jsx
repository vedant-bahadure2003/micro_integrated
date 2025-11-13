import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Logo = "/portal/homepage/mtss_logo_2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [{ name: "About Us", href: "#about" }],
    products: [
      { name: "VOCOxP", href: "#products" },
      { name: "Token System", href: "#products" },
      { name: "SIGNSAFE", href: "#products" },
      { name: "Loco Driver Desk", href: "#products" },
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14   rounded-lg flex items-center justify-center shadow-lg"
              >
                <img
                  src={Logo}
                  alt="Micro Integrated Logo"
                  width={60}
                  height={60}
                />
              </motion.div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Micro Integrated
                </h3>
                <p className="text-cyan-400 text-sm">
                  Semiconductor Systems Pvt Ltd
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Pioneering Semiconductor-based automation and verification systems
              for the modern world. Innovating the future of embedded
              intelligence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:info@microintegrated.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  info@microintegrated.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 7987913708
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-6 h-6 text-cyan-400 mt-0.5" />
                <span>
                  Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, Kishor
                  Bhagirath Tapadia Road Behind Anand Veg Restaurant, Bhalekar
                  Chawl Erandwane, Pune, Maharashtra – 411004
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear} Micro Integrated Semiconductor Systems Pvt Ltd. All
            rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
    </footer>
  );
};

export default Footer;
