"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

interface FooterItemProps {
  title: string;
  href: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ title, href }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out py-1"
  >
    {title}
  </Link>
);

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-950 ">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-row flex-wrap md:flex-column md:space-x-6 px-4 py-2 md:px-0 lg:py-0 text-center ">
            <FooterItem title="Privacy" href="/privacy" />
            <FooterItem title="Terms" href="/terms" />
            <FooterItem title="About" href="/about" />
          </div>

        </div>
      </div>
    </nav>
  );
};
