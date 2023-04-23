"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out py-1"
  >
    {title}
  </Link>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-950 ">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="md:hidden flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto
            `}
          >
            <div className="flex flex-col flex-wrap md:flex-row md:space-x-6 px-4 py-2 md:px-0 lg:py-0 text-center ">
            <NavItem title="Product" href="/product" />
              <NavItem title="About" href="/about" />
              <NavItem title="Support" href="/support" />
              <NavItem title="Pricing" href="/pricing" />
            </div>
            <div className="my-2 md:my-0 md:ml-10 flex justify-center">
              <Link
                className="bg-wobbly-blue text-white px-3 py-1 rounded hover:bg-wobbly-blue-dark"
                href={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
