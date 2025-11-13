import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";

const ProductFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  isInView,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-12"
    >
      {/* Search Bar */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products by name, category, or features..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:border-gray-300 transition-all duration-300 text-gray-900 "
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Product Categories</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group flex flex-col items-center px-6 py-4 rounded-2xl font-medium transition-all duration-300 min-w-[140px] ${
                  isActive
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                {/* Background Glow Effect */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover Effect */}
                {!isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    initial={false}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div
                    className={`flex items-center space-x-2 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span
                      className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                  <div className="text-center">
                    <div
                      className={`font-semibold text-sm ${
                        isActive ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.name}
                    </div>
                    {category.description && (
                      <div
                        className={`text-xs mt-1 ${
                          isActive ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {category.description}
                      </div>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Active Filters Display */}
      {(selectedCategory !== "all" || searchTerm) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-gray-600 font-semibold">
            Active filters:
          </span>

          {selectedCategory !== "all" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
            >
              <span>
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </span>
              <button
                onClick={() => onCategoryChange("all")}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
            >
              <Search className="w-3 h-3" />
              <span className="max-w-[200px] truncate">"{searchTerm}"</span>
              <button
                onClick={() => onSearchChange("")}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Clear All Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onCategoryChange("all");
              onSearchChange("");
            }}
            className="text-sm text-red-600 hover:text-red-700 font-medium underline transition-colors px-3 py-1"
          >
            Clear all filters
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductFilter;
