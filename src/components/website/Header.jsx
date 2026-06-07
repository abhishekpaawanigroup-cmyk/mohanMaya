import React, { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiX } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const [homeOpen, setHomeOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="max-w-[1440px] mx-auto py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/trandy-images/mm5.png"
              alt="logo"
              className="w-14 h-20"
            />
            <h1 className="text-4xl font-bold font-serif">MM</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[17px]">
              {/* Home */}
              <li className="relative group">
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  Home
                </a>
              </li>

              {/* About */}
              <li>
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  About
                </a>
              </li>

              {/* Shop */}
              <li className="relative group">
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  Shop
                </a>

                <ul className="absolute top-full left-0 mt-6 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 font-medium">
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Product Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
              </li>

              {/* Pages */}
              <li className="relative group">
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  Pages
                </a>

                <ul className="absolute top-full left-0 mt-6 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 font-medium">
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      404 Page
                    </a>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li className="relative group">
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  Blog
                </a>

                <ul className="absolute top-full left-0 mt-6 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 font-medium">
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ff7f50] hover:text-[#fff]"
                    >
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li>
                <a href="#" className="font-medium hover:text-[#ff7f50]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-5 py-3 outline-none w-64 font-medium"
              />

              <button className="bg-[#ff7f50] text-white text-lg p-4 rounded-full">
                <IoSearch />
              </button>
            </div>

            <div className="relative text-2xl cursor-pointer">
              <FaRegHeart />
              <span className="absolute -top-2 -right-2 bg-[#ff7f50] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            <div className="relative text-2xl cursor-pointer">
              <LuShoppingBag />
              <span className="absolute -top-2 -right-2 bg-[#ff7f50] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                12
              </span>
            </div>

            <button
              onClick={() => setOpenMenu(true)}
              className="text-4xl cursor-pointer lg:hidden"
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`lg:hidden fixed inset-0 bg-black/50 z-[999] transition-all duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[375px] sm:w-[400px] bg-[#111111] text-white z-[1000] overflow-y-auto transition-transform duration-500 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <h2 className="text-4xl font-bold font-serif">ADDINA</h2>
          </div>

          <button
            onClick={() => setOpenMenu(false)}
            className="text-[20px] p-[14px] rounded-full bg-[#ff7f50] flex items-center justify-center cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        <div className="p-8">
          <div className="border-b border-gray-700 pb-3 flex items-center justify-between">
            <input
              type="text"
              placeholder="What are you searching for?"
              className="bg-transparent outline-none text-lg w-full"
            />
            <IoSearch className="text-2xl hover:text-[#ff7f50] transition-colors duration-300 cursor-pointer" />
          </div>

          {/* Mobile Navigation Only */}
          <div className="block lg:hidden mt-8 border-t border-gray-800">
            {/* Home */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setHomeOpen(!homeOpen)}
                className="w-full flex justify-between items-center py-5"
              >
                <span className="text-lg font-semibold">Home</span>
                <span className="text-3xl">{homeOpen ? "-" : "+"}</span>
              </button>

              {homeOpen && (
                <div className="pb-4 pl-4 space-y-3 text-gray-400">
                  <a href="#" className="block">
                    Home Style 01
                  </a>
                  <a href="#" className="block">
                    Home Style 02
                  </a>
                  <a href="#" className="block">
                    Home Style 03
                  </a>
                </div>
              )}
            </div>

            {/* About */}
            <div className="py-5 border-b border-gray-800">
              <a href="#" className="text-lg font-semibold">
                About
              </a>
            </div>

            {/* Shop */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="w-full flex justify-between items-center py-5"
              >
                <span className="text-lg font-semibold">Shop</span>
                <span className="text-3xl">{shopOpen ? "-" : "+"}</span>
              </button>

              {shopOpen && (
                <div className="pb-4 pl-4 space-y-3 text-gray-400">
                  <a href="#" className="block">
                    Product
                  </a>
                  <a href="#" className="block">
                    Product Details
                  </a>
                  <a href="#" className="block">
                    Wishlist
                  </a>
                  <a href="#" className="block">
                    Cart
                  </a>
                  <a href="#" className="block">
                    Checkout
                  </a>
                </div>
              )}
            </div>

            {/* Pages */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="w-full flex justify-between items-center py-5"
              >
                <span className="text-lg font-semibold">Pages</span>
                <span className="text-3xl">{pagesOpen ? "-" : "+"}</span>
              </button>

              {pagesOpen && (
                <div className="pb-4 pl-4 space-y-3 text-gray-400">
                  <a href="#" className="block">
                    Team
                  </a>
                  <a href="#" className="block">
                    FAQ
                  </a>
                  <a href="#" className="block">
                    Pricing
                  </a>
                  <a href="#" className="block">
                    404 Page
                  </a>
                </div>
              )}
            </div>

            {/* Blog */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setBlogOpen(!blogOpen)}
                className="w-full flex justify-between items-center py-5"
              >
                <span className="text-lg font-semibold">Blog</span>
                <span className="text-3xl">{blogOpen ? "-" : "+"}</span>
              </button>

              {blogOpen && (
                <div className="pb-4 pl-4 space-y-3 text-gray-400">
                  <a href="#" className="block">
                    Blog Grid
                  </a>
                  <a href="#" className="block">
                    Blog List
                  </a>
                  <a href="#" className="block">
                    Blog Details
                  </a>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="py-5 border-b border-gray-800">
              <a href="#" className="text-lg font-semibold">
                Contact
              </a>
            </div>
          </div>

          <h3 className="text-[26px] font-bold mt-12 mb-8">Contact Info</h3>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
                <FiMapPin />
              </div>

              <p className="text-lg font-medium">
                12/A, Mirnada City Tower, NYC
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
                <FiPhone />
              </div>

              <p className="text-lg font-medium">+088889797697</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
                <FiMail />
              </div>

              <p className="text-lg font-medium">support@mail.com</p>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
              <FaYoutube />
            </div>

            <div className="text-[18px] p-[12px] border border-gray-700 rounded-full flex items-center justify-center hover:border-transparent hover:bg-[#ff7f50] transition-colors duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
