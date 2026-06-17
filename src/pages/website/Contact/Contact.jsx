import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "../../../components/common/ScrollReveal";
import PageHero from "../../../components/common/PageHero";
import { useApp } from "../../../context/AppContext";
import { usePageMeta } from "../../../hooks/useHooks";

const initialForm = { name: "", email: "", message: "" };

const details = [
  { icon: FiMapPin, label: "Address", value: "Ganga Enclave, Roorkee, Uttarakhand, India" },
  { icon: FiPhone, label: "Phone", value: "+91 99567 48903" },
  { icon: FiMail, label: "Email", value: "support@mohanmaya.in" },
];

const socials = [
  { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/mohanmaya" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/mohanmaya" },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919956748903" },
];

export default function Contact() {
  usePageMeta(
    "Contact Us — Mohan Maya",
    "Get in touch with the Mohan Maya team for custom orders, product questions, or support."
  );
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

  // Shared input styling: icon padding, smooth focus ring + hover, dark mode.
  const field =
    "w-full bg-gray-50 dark:bg-white/5 border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-gray-200 focus-visible:!outline-none hover:border-gray-300 dark:hover:border-white/20";
  const okBorder = "border-gray-200 dark:border-white/10";
  const errBorder = "border-red-400 focus:border-red-400 focus:ring-red-400/20";
  const labelCls = "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5";
  const iconCls = "pointer-events-none absolute left-4 text-gray-400";

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for any questions, support, or feedback."
      />

      {/* Map — ~50% overlaps the hero for a modern "emerging" layered look.
          The negative top margin equals half the map's height at each
          breakpoint (250/280/300px → 125/140/150px), so exactly half sits
          inside the hero and half below. Shifts the content below up with it,
          keeping spacing consistent and introducing no horizontal scroll. */}
      <div className="relative z-20 -mt-[125px] sm:-mt-[140px] lg:-mt-[150px] bg-[linear-gradient(to_bottom,transparent_50%,#f4edee_50%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,#0d0508_50%)]">
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 ">
          <iframe
            title="Mohan Maya location — Ganga Enclave, Roorkee, Uttarakhand, India"
            src="https://maps.google.com/maps?q=Paawani%20Group,%20Ganga%20Enclave,%20Canal%20Rd,%20near%20Ganeshpur,%20Ganesh%20Pur,%20Roorkee,%20Uttarakhand%20247667&z=15&output=embed"
            className="block w-full h-[250px] sm:h-[280px] lg:h-[300px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#f4edee] dark:bg-[#0d0508]">
        <div className="max-w-6xl mx-auto px-5">
          {/* Section heading */}
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-[#fe4462] border border-[#fe4462] px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-5">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a question about a product, want a custom order, or just want to say hello?
              Fill out the form below and our team will get back to you shortly.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Info */}
            <ScrollReveal direction="right" className="h-full">
              <div className="h-full flex flex-col bg-white dark:bg-white/5 rounded-3xl p-6 sm:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-6">
                  Reach us through any of these channels.
                </p>

                <div className="space-y-4">
                  {details.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-4 rounded-2xl p-4 bg-gray-50 dark:bg-white/5 hover:bg-[#fe4462]/5 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#fe4462] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#fe4462]/30 group-hover:scale-105 transition-transform duration-200">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                        <p className="font-semibold text-gray-800 dark:text-white break-words">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working hours */}
                <div className="mt-4 flex items-center gap-4 rounded-2xl p-4 border border-dashed border-[#fe4462]/30">
                  <div className="w-12 h-12 rounded-full bg-[#fe4462]/10 text-[#fe4462] flex items-center justify-center shrink-0">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Working Hours</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Mon – Sat · 9 AM – 6 PM</p>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-auto pt-6">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Follow us</p>
                  <div className="flex gap-3">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Mohan Maya on ${label}`}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-[#fe4462] hover:text-white transition-all duration-200"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="left" className="h-full">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="h-full flex flex-col bg-white dark:bg-white/5 rounded-3xl p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-6">
                  We typically reply within 24 hours.
                </p>

                <div className="space-y-5 flex-1">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelCls}>Full Name</label>
                    <div className="relative flex items-center">
                      <FiUser size={18} className={iconCls} />
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`${field} ${errors.name ? errBorder : okBorder}`}
                        placeholder="e.g. Abhi Sharma"
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" role="alert" className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <FiAlertCircle size={13} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelCls}>Email Address</label>
                    <div className="relative flex items-center">
                      <FiMail size={18} className={iconCls} />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`${field} ${errors.email ? errBorder : okBorder}`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" role="alert" className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 ">
                        <FiAlertCircle size={13} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelCls}>Your Message</label>
                    <div className="relative">
                      <FiMessageSquare size={18} className="pointer-events-none absolute left-4 top-3.5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`${field} resize-none min-h-[140px] ${errors.message ? errBorder : okBorder}`}
                        placeholder="Tell us how we can help…"
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" role="alert" className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5">
                        <FiAlertCircle size={13} /> {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-6 !py-3.5 text-base group"
                >
                  <FiSend size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  Send Message
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  We respect your privacy — your details stay with us.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
