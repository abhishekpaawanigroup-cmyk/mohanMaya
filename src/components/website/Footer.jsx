import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const services = [
  "Log In",
  "Wishlist",
  "Return Policy",
  "Privacy Policy",
  "Shopping FAQs",
];

const company = [
  "Home",
  "About Us",
  "Pages",
  "Blog",
  "Contact Us",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#fffq]">M&M</span>
            </h2>

            <p className="text-gray-400 leading-6 mb-8">
              It helps designers plan out where the content will sit,
              the content to be written and approved.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-[#fe4462] hover:text-white transition-all duration-300"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 pl-5">Services</h3>

            <ul className="space-y-3">
              {services.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center cursor-pointer"
                >
                  <MdKeyboardArrowRight className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#fff] text-[20px]" />
                  <span className="text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 pl-5">Company</h3>

            <ul className="space-y-3">
              {company.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center cursor-pointer"
                >
                  <MdKeyboardArrowRight className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#fff] text-[20px]" />

                  <span className="text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact</h3>

            <p className="text-gray-400 leading-8 mb-6">
              4517 Washington Ave,
              <br />
              Manchester, Kentucky 39495
            </p>

            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#fe4462] flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-semibold">
                  711-2880 Nulla St.
                </h4>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fe4462] flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-semibold">
                  +964 742 44 763
                </h4>
                <p className="text-gray-500">
                  Mon - Sat: 9 AM - 5 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            © All Copyright 2026 by Mohan-Maya
          </p>


          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition">
              Terms & Condition
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
