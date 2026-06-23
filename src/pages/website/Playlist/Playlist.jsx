import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FiPlay, FiExternalLink, FiArrowRight } from "react-icons/fi";
import Breadcrumb from "../../../components/common/Breadcrumb";
import SectionHeading from "../../../components/common/SectionHeading";
import ScrollReveal from "../../../components/common/ScrollReveal";
import { usePageMeta } from "../../../hooks/useHooks";

// Official channels (kept in sync with the footer).
const LINKS = {
  instagram: "https://instagram.com/mohanmaya_",
  youtube: "https://www.youtube.com/results?search_query=mohanmaya",
  facebook: "https://www.facebook.com/share/18dgmfQ39U/",
};

const PLATFORM = {
  instagram: {
    label: "Instagram",
    Icon: FaInstagram,
    href: LINKS.instagram,
    badge: "bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] text-white",
  },
  youtube: {
    label: "YouTube",
    Icon: FaYoutube,
    href: LINKS.youtube,
    badge: "bg-[#ff0000] text-white",
  },
  facebook: {
    label: "Facebook",
    Icon: FaFacebookF,
    href: LINKS.facebook,
    badge: "bg-[#1877f2] text-white",
  },
};

const FEATURED = [
  { id: "f1", platform: "youtube", title: "Sculpting Radha–Krishna: A 40-Hour Miniature Build", thumb: "/Shop/Product1.jpeg", duration: "12:48" },
  { id: "f2", platform: "instagram", title: "Hand-Painting the Tiniest Peacock Feather", thumb: "/season/mm5.png", duration: "0:58" },
  { id: "f3", platform: "facebook", title: "Behind the Studio: A Day in Vrindavan", thumb: "/About/Hero/about-banner.jpeg", duration: "8:15" },
];

const REELS = [
  { id: "r1", platform: "instagram", title: "Mixing the perfect skin tone", thumb: "/trandy-images/mm4.png" },
  { id: "r2", platform: "instagram", title: "Before & after: Krishna figure", thumb: "/trandy-images/mm5.png" },
  { id: "r3", platform: "instagram", title: "Painting micro details", thumb: "/trandy-images/mm6.png" },
  { id: "r4", platform: "instagram", title: "Tiny tools, big art", thumb: "/trandy-images/mm7.png" },
  { id: "r5", platform: "instagram", title: "Festival collection sneak peek", thumb: "/season/mm6.png" },
];

const YOUTUBE = [
  { id: "y1", platform: "youtube", title: "How We Cast Resin Miniatures (Full Process)", thumb: "/bestseller-image/mm4.png", duration: "15:02" },
  { id: "y2", platform: "youtube", title: "Painting a Madhav Figurine — Start to Finish", thumb: "/hero/Madhav.jpeg", duration: "21:37" },
  { id: "y3", platform: "youtube", title: "Studio Tour & Tools We Love", thumb: "/bestseller-image/mm6.png", duration: "9:44" },
];

const FACEBOOK = [
  { id: "fb1", platform: "facebook", title: "Live: Q&A With Our Artisans", thumb: "/Featured-images/mm4.png", duration: "32:10" },
  { id: "fb2", platform: "facebook", title: "Customer Stories: Gifts That Last", thumb: "/Shop/Product4.jpeg", duration: "5:21" },
  { id: "fb3", platform: "facebook", title: "Packing Your Order With Care", thumb: "/Shop/Product6.jpeg", duration: "4:03" },
];

const LATEST = [
  { id: "l1", platform: "instagram", title: "New arrival: Winter edition reel", thumb: "/season/mm7.png" },
  { id: "l2", platform: "youtube", title: "Detailing eyes on a 2-inch figure", thumb: "/Featured-images/mm6.png", duration: "11:09" },
  { id: "l3", platform: "facebook", title: "Weekend studio vlog", thumb: "/hero/mm.jpeg", duration: "7:52" },
  { id: "l4", platform: "instagram", title: "Satisfying base-coat timelapse", thumb: "/Featured-images/mm7.png" },
];

/** Modern video card: thumbnail, play overlay, platform badge, title, link out. */
function VideoCard({ video, aspect = "aspect-video" }) {
  const p = PLATFORM[video.platform];
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${video.title} — watch on ${p.label}`}
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`relative ${aspect} overflow-hidden bg-[#f0e0e3] dark:bg-white/5`}>
        <img
          src={video.thumb}
          alt={video.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Play button */}
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center h-14 w-14 rounded-full bg-white/90 text-[#fe4462] shadow-lg scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <FiPlay className="ml-0.5" size={24} />
          </span>
        </span>

        {/* Platform badge */}
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${p.badge}`}>
          <p.Icon size={12} /> {p.label}
        </span>

        {video.duration && (
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-[11px] font-medium">
            {video.duration}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#fe4462] transition-colors">
          {video.title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1 text-sm text-[#fe4462] font-medium">
          Watch <FiExternalLink size={14} />
        </span>
      </div>
    </a>
  );
}

/** A titled grid of video cards with staggered scroll-reveal. */
function VideoSection({ badge, title, subtitle, accent, items, aspect, cols, alt }) {
  return (
    <section className={alt ? "py-16 sm:py-20 bg-[#f5f0e8] dark:bg-[#140a0d]" : "py-16 sm:py-20 bg-[#f4edee] dark:bg-[#0d0508]"}>
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} accent={accent} className="mb-12" />
        <div className={`grid ${cols} gap-4 sm:gap-6`}>
          {items.map((v, i) => (
            <ScrollReveal key={v.id} direction="up" delay={Math.min(i * 0.05, 0.3)}>
              <VideoCard video={v} aspect={aspect} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Playlist() {
  usePageMeta(
    "Playlist — Mohan Maya",
    "Watch our handcrafted miniature journey across Instagram, YouTube and Facebook - build processes, painting timelapses, studio tours and more."
  );

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative h-screen max-h-[760px] bg-cover bg-center"
        aria-label="Playlist"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero/hero-all.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 text-white">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="mb-4"
              >
                <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Playlist" }]} light />
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-4"
              >
                Our <span className="text-[#fe4462]">Playlist</span>
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              >
                Step inside the studio. Watch our miniatures come to life through build
                processes, painting - across all our channels.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="mt-8 flex flex-wrap gap-3 sm:gap-4"
              >
                {Object.values(PLATFORM).map(({ label, Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fe4462] border border-[#fe4462] text-white font-semibold hover:bg-transparent hover:border-[#fe4462] hover:text-[#fe4462] transition-all duration-300"
                  >
                    <Icon size={18} /> {label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Content ── */}
      <VideoSection
        badge="Featured"
        title="Best of the Studio"
        subtitle="Our most-loved videos — the builds and stories worth watching first."
        accent="#fe4462"
        items={FEATURED}
        aspect="aspect-video"
        cols="sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* ── Instagram Reels ── */}
      <VideoSection
        badge="Instagram"
        title="Reels"
        subtitle="Quick, satisfying glimpses of the craft in motion."
        accent="#d62976"
        items={REELS}
        aspect="aspect-[9/16]"
        cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        alt
      />

      {/* ── YouTube Videos ── */}
      <VideoSection
        badge="YouTube"
        title="Long-Form Videos"
        subtitle="Full build processes, tutorials and studio deep-dives."
        accent="#ff0000"
        items={YOUTUBE}
        aspect="aspect-video"
        cols="sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* ── Facebook Videos ── */}
      <VideoSection
        badge="Facebook"
        title="Community Videos"
        subtitle="Lives, customer stories and behind-the-scenes moments."
        accent="#1877f2"
        items={FACEBOOK}
        aspect="aspect-video"
        cols="sm:grid-cols-2 lg:grid-cols-3"
        alt
      />

      {/* ── Latest Uploads ── */}
      <VideoSection
        badge="Fresh"
        title="Latest Uploads"
        subtitle="The newest content from across all our platforms."
        accent="#c48212"
        items={LATEST}
        aspect="aspect-video"
        cols="sm:grid-cols-2 lg:grid-cols-4"
      />

      {/* ── Follow Our Journey CTA ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f4edee] dark:bg-[#0d0508]">
        <div className="max-w-7xl mx-auto px-5">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 text-center bg-gradient-to-br from-[#fe4462] to-[#d93550] shadow-xl">
              <div className="pointer-events-none absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Follow Our Journey</h2>
                <p className="mt-4 text-white/90 max-w-xl mx-auto text-base sm:text-lg">
                  New miniatures, timelapses and studio stories every week. Join us on
                  your favourite platform.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                  {Object.values(PLATFORM).map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-white text-[#fe4462] font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon size={18} /> {label}
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
