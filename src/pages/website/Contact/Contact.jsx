import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import ScrollReveal from "../../../components/common/ScrollReveal";
import { useApp } from "../../../context/AppContext";

const initialForm = { name: "", email: "", message: "" };

const details = [
  { icon: FiMapPin, label: "Address", value: "Ganga Enclave, Roorkee, Uttarakhand, India" },
  { icon: FiPhone, label: "Phone", value: "+91 99567 48903" },
  { icon: FiMail, label: "Email", value: "support@mohanmaya.in" },
];

export default function Contact() {
  const { addToast } = useApp();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 10) next.message = "Message is too short";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      addToast("Please fix the highlighted fields", "error");
      return;
    }
    addToast("Message sent! We'll get back to you soon.", "success");
    setForm(initialForm);
  };

  const field = "w-full bg-gray-50 dark:bg-white/5 border rounded-xl px-4 py-3 outline-none transition focus:border-[#fe4462] dark:text-white";

  return (
    <section className="pt-28 pb-20 bg-[#f4edee] dark:bg-[#0d0508] min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-[#fe4462] border border-[#fe4462] px-4 py-2 text-sm font-bold uppercase rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe4462] mt-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            Have a question or a custom request? Send us a message and our team will respond shortly.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <ScrollReveal direction="right" className="space-y-6">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-2xl p-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#fe4462] text-white flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{value}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white dark:bg-white/5 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-gray-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`${field} ${errors.name ? "border-red-400" : "border-gray-200 dark:border-white/10"}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`${field} ${errors.email ? "border-red-400" : "border-gray-200 dark:border-white/10"}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${field} resize-none ${errors.message ? "border-red-400" : "border-gray-200 dark:border-white/10"}`}
                  placeholder="How can we help?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <FiSend size={18} /> Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
