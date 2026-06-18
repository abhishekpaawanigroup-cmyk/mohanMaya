import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";

const ABOUT_HERO_IMAGE = "/About/Hero/about-banner.jpeg";

/**
 * Reusable inner-page hero, styled to match the About page hero
 * (same background image, dark overlay, typography and spacing).
 *
 * Props:
 *  - title:      main heading (rendered as the page <h1>)
 *  - subtitle:   supporting line below the title
 *  - image:      background image (defaults to the About hero banner)
 *  - align:      "left" (default, matches About) or "center"
 *  - breadcrumb: optional [{ label, to? }] rendered above the title
 */
export default function PageHero({
  title,
  subtitle,
  image = ABOUT_HERO_IMAGE,
  align = "left",
  breadcrumb,
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <section
      className="relative h-screen  max-h-[1000px] bg-cover bg-center md:bg-bottom"
      style={{ backgroundImage: `url('${image}')` }}
      aria-label={title}
    >
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 text-white">
          <motion.div
            className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : alignment}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
            }}
          >
            {breadcrumb?.length > 0 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="mb-4"
              >
                <Breadcrumb items={breadcrumb} light className={align === "center" ? "flex justify-center" : ""} />
              </motion.div>
            )}

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
