import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full border-t border-[#c89d65] bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="h-[110px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="Addina Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[17px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#bf9456]"
                      : "text-black hover:text-[#bf9456]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Search */}
            <div className="hidden md:flex items-center overflow-hidden border border-gray-300 rounded-full  h-[44px]">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 outline-none text-lg"
              />

              <button className="w-[44px] h-[44px] bg-[#bf9456] flex items-center justify-center text-white text-[18px] rounded-full">
                <FiSearch />
              </button>
            </div>

            {/* Wishlist */}
            <div className="relative cursor-pointer">
              <FiHeart className="text-[24px] text-black" />
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <FiShoppingBag className="text-[24px] text-black" />
            </div>

            {/* Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <FaBarsStaggered className="text-[24px] text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
