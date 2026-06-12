import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useHooks";

/** Thin gradient bar pinned to the top that fills as the user scrolls. */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[1001] origin-left bg-gradient-to-r from-[#fe4462] to-[#ff8d6b]"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
