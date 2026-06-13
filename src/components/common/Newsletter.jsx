import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { useApp } from "../../context/AppContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const { addToast } = useApp();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email.trim()) {
      setError("Please enter your email");
      addToast("Please enter your email", "error");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email address");
      addToast("Enter a valid email address", "error");
      return;
    }

    setError("");
    setLoading(true);
    // Simulate an async subscribe request.
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      addToast("Subscribed! Check your inbox for a welcome treat.", "success");
    }, 1200);
  };

  return (
    <section className="px-4 sm:px-6 py-16 bg-[#f4edee] dark:bg-[#0d0508]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl"
      >
        {/* Gradient + glass backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e57f90] via-[#f1aaaa] to-[#ff8d6b]" />
        <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/15 blur-2xl" />
        

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 text-center text-white">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md mb-5"
          >
            <FiMail size={26} />
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base sm:text-lg">
            Get exclusive offers, new arrivals, and special discounts delivered directly to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 bg-white/15 backdrop-blur-xl p-2 rounded-2xl sm:rounded-full ring-1 ring-white/30">
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  aria-invalid={Boolean(error)}
                  className="w-full bg-white/90 focus:bg-white text-gray-800 placeholder-gray-400 rounded-xl sm:rounded-full pl-11 pr-4 py-3.5 outline-none transition"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-[#0d0508] text-white font-semibold px-7 py-3.5 rounded-xl sm:rounded-full hover:bg-black transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Subscribing…
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Subscribe
                  </>
                )}
              </motion.button>
            </div>
            {error && <p className="text-white text-sm mt-3 font-medium">{error}</p>}
            <p className="text-white/70 text-xs mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
