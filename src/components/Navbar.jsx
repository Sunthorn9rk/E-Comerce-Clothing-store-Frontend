"use client";
import Image from "next/image";
import React, {useState} from "react";
import {FiShoppingCart} from "react-icons/fi";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoIosSearch} from "react-icons/io";
import {LuMenu} from "react-icons/lu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4 gap-8">
        {/* ########1 */}
        <div class="flex-initial ">
          {/* LOGO */}
          <a href="/" className="flex items-center space-x-3 ">
            <span className="self-center text-3xl font-black whitespace-nowrap">
              SHOP.CO
            </span>
          </a>
        </div>

        {/* ########2 */}
        <div class="flex-initial flex-wrap mt-2">
          <div
            className="items-center justify-between w-full md:flex md:w-auto"
            id="navbar-search"
          >
            {/* Main Menu */}
            <ul className="hidden md:flex  p-4 md:p-0  font-medium  border-gray-100 rounded-lg  space-x-8 flex-row mt-0 border-0 bg-white  ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  On Sale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Brands
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ########3 */}
        <div class="flex-1">
          {/* search-bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoIosSearch className="size-5 text-gray-500" />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for products..."
            />
          </div>
        </div>

        {/* ########4 */}
        <div class="flex-initial">
          <div className="flex space-x-4 items-center justify-center">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded={isSearchOpen ? "true" : "false"}
              className="md:hidden text-gray-500"
            >
              <IoIosSearch className="size-6" />
              <span className="sr-only">Search</span>
            </button>
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center justify-center size-6 text-gray-500 md:hidden"
              aria-controls="navbar-search"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <LuMenu className="size-6" />
            </button>
            <FiShoppingCart className="size-6 text-gray-500" />
            <HiOutlineUserCircle className="size-6 text-gray-500" />
          </div>
        </div>
        {/* menu-And-searchbar-small-screen */}
        <div
          className="items-center justify-between w-full md:flex md:w-auto"
          id="navbar-search"
        >
          {/* search-bar-when-small-screen */}
          <div
            className={`relative p-2 md:hidden ${
              isSearchOpen ? "block" : "hidden"
            }`}
          >
            <div className="absolute inset-y-0 start-4 flex items-center ps-3 pointer-events-none">
              <IoIosSearch className="w-4 h-4 text-gray-500 " />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for products..."
            />
          </div>
          {/* Main Menu */}
          <ul
            className={`flex flex-col p-2 font-medium border border-gray-100 rounded-lg bg-gray-50 ${
              isMenuOpen ? "block" : "hidden"
            } md:hidden`}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
