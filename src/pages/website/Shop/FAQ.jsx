import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Standard orders are typically delivered within 5-7 business days. Custom and personalized orders may take 7-14 business days depending on the complexity of the design.",
  },
  {
    question: "Do you offer custom orders?",
    answer:
      "Yes, we offer custom miniature and personalized figurine services. Share your photos, themes, or specific requirements and we'll create something unique for you.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Replacement is available for damaged or defective products. Personalized and custom-made items are generally not eligible for returns or exchanges.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking link via email or WhatsApp to monitor its status.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-[#ffd8df]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="sticky top-24">
            <span className="inline-block text-[#fe4462] border border-[#fe4462] px-4 py-1 rounded-full text-sm font-medium">
              FAQs
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Frequently Asked
              <span className="text-[#fe4462] block">
                Questions
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Have questions about our products, delivery, customization,
              or returns? Find quick answers below.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#fff8f9] border border-[#ffd8df]">
              <h4 className="font-semibold text-lg mb-2">
                Still have questions?
              </h4>

              <p className="text-gray-600 text-sm mb-4">
                Our support team is always ready to help you.
              </p>

              <button className="bg-[#fe4462] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#fe4462] shadow-lg"
                    : "border-[#fe4462]"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="font-semibold text-lg text-gray-800 pr-4">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-30 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;