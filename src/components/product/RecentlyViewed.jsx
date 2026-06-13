import ProductCard from "../common/ProductCard";
import ScrollReveal from "../common/ScrollReveal";
import { useApp } from "../../context/AppContext";

/**
 * Shows the products a user has recently opened. Renders nothing when the
 * history is empty. `excludeId` hides the product currently being viewed.
 */
export default function RecentlyViewed({
  title = "Recently Viewed",
  excludeId = null,
  count = 4,
  onQuickView,
  className = "",
}) {
  const { recentlyViewed } = useApp();
  const items = recentlyViewed.filter((p) => p.id !== excludeId).slice(0, count);

  if (items.length === 0) return null;

  return (
    <section className={`py-16 bg-[#f5f0e8] dark:bg-[#0d0508] ${className}`}>
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#c48212]">{title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.05}>
              <ProductCard product={p} onQuickView={onQuickView} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
