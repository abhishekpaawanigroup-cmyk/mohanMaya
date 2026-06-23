import { createPortal } from "react-dom";
import { motion } from "framer-motion";

/**
 * Renders the "fly to cart" ghost images. Each flyer animates a copy of the
 * product image from its card to the cart icon, shrinking and fading for a
 * premium feel. On arrival it calls onDone, which commits the cart update and
 * bounces the cart icon. Rendered in a body portal so it floats above all UI.
 */
export default function FlyToCart({ flyers, onDone }) {
  if (typeof document === "undefined" || flyers.length === 0) return null;

  return createPortal(
    <>
      {flyers.map((f) => {
        const size = Math.min(f.from.width, f.from.height) || 120;
        const startX = f.from.left + f.from.width / 2 - size / 2;
        const startY = f.from.top + f.from.height / 2 - size / 2;
        const endX = f.to.left + f.to.width / 2 - size / 2;
        const endY = f.to.top + f.to.height / 2 - size / 2;

        return (
          <motion.img
            key={f.id}
            src={f.image}
            alt=""
            aria-hidden="true"
            initial={{ x: startX, y: startY, scale: 1, opacity: 1 }}
            animate={{
              x: endX,
              y: endY,
              scale: 0.18,
              opacity: 0.45,
              // Gentle arc: lift slightly before swooping into the cart.
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.7, times: [0, 0.7, 1], ease: "easeIn" },
              },
            }}
            onAnimationComplete={() => onDone(f)}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: size,
              height: size,
              objectFit: "contain",
              borderRadius: "9999px",
              pointerEvents: "none",
              zIndex: 9999,
              willChange: "transform, opacity",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))",
            }}
          />
        );
      })}
    </>,
    document.body
  );
}
