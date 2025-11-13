import { motion } from "framer-motion";
import { useState } from "react";
import {
  Download,
  Play,
  CheckCircle2,
  Award,
  ArrowRight,
  Eye,
  FileText,
  ExternalLink,
} from "lucide-react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const IconComponent = product.icon;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}

        {/* Product Image */}
        <img
          src={
            product.image ||
            "/portal/homepage/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg"
          }
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-110" : "scale-100"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            product.color
          } transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-60"
          }`}
        />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4">
          <div
            className={`w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center transform ${
              isHovered ? "scale-110 rotate-6" : "scale-100"
            } transition-all duration-300`}
          >
            <IconComponent
              className={`w-7 h-7 bg-gradient-to-br ${product.color} bg-clip-text text-black`}
            />
          </div>
        </div>

        {/* Certification Badge */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-md">
            <Award className="w-3 h-3 text-yellow-500" />
            <span>Certified</span>
          </div>
        )}

        {/* Hover Overlay with Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center"
        >
          <div className="flex space-x-2">
            {product.video && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                title="Watch Demo"
              >
                <Play className="w-5 h-5" />
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-colors shadow-lg"
              title="View Details"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tagline */}
        <div className="mb-2">
          <span
            className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} bg-opacity-10 text-xs font-semibold rounded-full uppercase tracking-wide bg-clip-text text-transparent`}
            style={{
              background: `linear-gradient(to right, var(--tw-gradient-stops))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {product.tagline}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-1 text-xs text-gray-700"
              >
                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Highlight */}
        {product.specifications && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Specifications
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(product.specifications)
                .slice(0, 2)
                .map(([key, value]) => (
                  <div key={key}>
                    <div className="text-gray-500 capitalize">
                      {key.replace("_", " ")}
                    </div>
                    <div className="font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {/* {product.certifications && product.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.certifications.slice(0, 3).map((cert, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md border border-green-200"
              >
                <Award className="w-3 h-3 mr-1" />
                {cert}
              </span>
            ))}
          </div>
        )} */}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between gap-2">
            {/* Download Brochure */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Brochure</span>
            </motion.button>

            {/* View Details Button */}
            <motion.button
              whileHover={{ x: 3 }}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
          isHovered ? `border-blue-300` : "border-transparent"
        }`}
      />

      {/* Corner Accent */}
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 rounded-tl-full transition-opacity duration-300`}
      />
    </motion.div>
  );
};

export default ProductCard;
