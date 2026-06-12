import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 bg-[#f4edee] dark:bg-[#0d0508]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#fe4462] text-sm border border-[#fe4462] rounded-full px-4 py-2 font-semibold uppercase tracking-widest">
            Who We Are
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#fe4462] mt-3">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            We are committed to creating meaningful experiences and
            delivering exceptional value through innovation, creativity,
            and dedication.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full gap-8 lg:flex justify-center">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-[400px] bg-transparent border border-[#fe4462] p-8 rounded-3xl shadow-lg mb-8 lg:mb-0"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <Target size={30} className="text-[#fe4462]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To create beautifully crafted miniatures that inspire imagination, celebrate creativity, and bring beloved characters and stories to life through exceptional detail and craftsmanship.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[400px] bg-transparent border border-[#fe4462] p-8 rounded-3xl shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <Eye size={30} className="text-[#fe4462]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our vision is to become a trusted leader in our industry,
              shaping a future where innovation, quality, and customer
              satisfaction drive positive change across the world.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;