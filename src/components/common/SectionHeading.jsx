import ScrollReveal from "./ScrollReveal";

/**
 * Consistent section heading: pill badge + title + optional subtitle.
 * `accent` controls the brand colour (pink by default, gold for warm sections).
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  accent = "#fe4462",
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`max-w-2xl ${align === "center" ? "mx-auto" : ""} ${className}`}>
      <div className={alignment}>
        {badge && (
          <span
            className="inline-block bg-transparent border px-4 py-1 text-sm font-bold uppercase rounded-full tracking-wide"
            style={{ color: accent, borderColor: accent }}
          >
            {badge}
          </span>
        )}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4"
          style={{ color: accent }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
