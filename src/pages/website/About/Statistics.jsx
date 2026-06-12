import { motion } from "framer-motion";

const stats = [
  {
    number: "5K+",
    title: "Happy Customers",
  },
  {
    number: "10K+",
    title: "Miniatures Crafted",
  },
  {
    number: "50+",
    title: "Unique Designs",
  },
  {
    number: "99%",
    title: "Customer Satisfaction",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-[#f5f0e8] dark:bg-[#0d0508]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#c48212] border border-[#c48212] rounded-full px-4 py-2 font-semibold uppercase tracking-widest">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#c48212] mt-3">
            Numbers That Speak
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            Our journey is reflected through the trust of our customers
            and the passion behind every miniature we create.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border border-[#ffd8df] dark:border-white/10 rounded-3xl p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#c48212] mb-3">
                {item.number}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;