import {
  ShieldCheck,
  Truck,
  PencilRuler,
} from "lucide-react";
import { LuHandHeart } from "react-icons/lu";

const features = [
  {
    icon: <LuHandHeart size={32} />,
    title: "Handmade Quality",
    description: "Each piece is carefully handcrafted with love.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "High Accuracy",
    description: "Super realistic details for a true-to-life look.",
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    description: "Safe packaging & on-time delivery.",
  },
  {
    icon: <PencilRuler size={32} />,
    title: "Custom Designs",
    description: "We create custom miniatures as per your imagination.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-10 px-4 bg-[#ffd8df]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#fff7f7] border-2 border-[#fe4462] rounded-lg lg:rounded-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-8 ${
                  index !== features.length - 1
                    ? "lg:border-r-2 border-[#fe4462]"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-18 h-18 rounded-full bg-[#fddae0] text-[#fe4462] shrink-0">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}