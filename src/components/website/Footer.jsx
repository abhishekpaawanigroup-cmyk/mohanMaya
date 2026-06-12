import { Link } from "react-router-dom";
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
  { label: "Shop", to: "/shop" },
  { label: "Wishlist", to: "/shop" },
  { label: "FAQs", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

const company = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram];

const LinkColumn = ({ title, links }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-8 ml-[18px]">{title}</h3>
    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className="group flex items-center cursor-pointer">
            <MdKeyboardArrowRight className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white text-[20px]" />
            <span className="text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gradient">M&M</h2>
            <p className="text-gray-400 leading-6 mb-8">
              Handcrafted miniature art that captures extraordinary detail and timeless
              craftsmanship — created with love in Vrindavan.
            </p>
            <div className="flex gap-4">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-[#fe4462] hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Services" links={services} />
          <LinkColumn title="Company" links={company} />

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact</h3>
            <p className="text-gray-400 leading-8 mb-6">
              Ganga Enclave, Shobha Sadan,
              <br />
              Roorke, Uttarakhand, India
            </p>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#fe4462] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold">support@mohanmaya.in</h4>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fe4462] flex items-center justify-center shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold">+91 99567 48903</h4>
                <p className="text-gray-500">Mon - Sat: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">© {new Date().getFullYear()} Mohan-Maya. All rights reserved.</p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
