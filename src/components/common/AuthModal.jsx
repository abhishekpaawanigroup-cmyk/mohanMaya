import { useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiMail, FiLock, FiUser } from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import { useModalA11y } from "../../hooks/useHooks";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Login / Register modal (mock auth). `mode` is "login" | "register".
 */
export default function AuthModal({ mode = "login", onClose }) {
  const { login, register } = useApp();
  const dialogRef = useModalA11y(onClose);
  const [tab, setTab] = useState(mode);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const isRegister = tab === "register";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (isRegister && !form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Use at least 6 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    if (isRegister) register({ name: form.name.trim(), email: form.email.trim() });
    else login({ email: form.email.trim() });
    onClose();
  };

  const field = (name) =>
    `w-full bg-gray-50 dark:bg-white/5 border rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-[#fe4462] dark:text-white ${
      errors[name] ? "border-red-400" : "border-gray-200 dark:border-white/10"
    }`;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative w-full max-w-md rounded-3xl bg-white/95 dark:bg-[#140a0d]/95 backdrop-blur-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 outline-none p-7 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#fe4462] hover:text-white transition"
          aria-label="Close"
        >
          <FiX size={18} />
        </button>

        <h2 id="auth-title" className="text-2xl font-bold text-gray-900 dark:text-white">
          {isRegister ? "Create account" : "Welcome back"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {isRegister ? "Join Mohan-Maya for a tailored experience." : "Log in to continue shopping."}
        </p>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-gray-100 dark:bg-white/5 rounded-full mt-6">
          {["login", "register"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setErrors({}); }}
              className={`py-2 rounded-full text-sm font-semibold capitalize transition ${
                tab === t ? "bg-[#fe4462] text-white shadow" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t === "login" ? "Login" : "Register"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          {isRegister && (
            <div>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className={field("name")} />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" className={field("email")} />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className={field("password")} />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button type="submit" className="btn-primary w-full justify-center !py-3">
            {isRegister ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
          {isRegister ? "Already have an account?" : "New to Mohan-Maya?"}{" "}
          <button
            type="button"
            onClick={() => { setTab(isRegister ? "login" : "register"); setErrors({}); }}
            className="text-[#fe4462] font-semibold hover:underline"
          >
            {isRegister ? "Login" : "Create one"}
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
}
