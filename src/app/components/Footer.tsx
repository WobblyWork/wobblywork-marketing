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

  return (
    <nav className="bg-white shadow dark:bg-gray-950 ">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-row flex-wrap md:flex-column md:space-x-6 px-4 py-2 md:px-0 lg:py-0 text-center ">
            <FooterItem title="Privacy" href="https://app.termly.io/document/privacy-policy/93fd40a1-18cd-4f5a-b394-362c290b4d33" />
            <FooterItem title="Terms of Use" href="https://app.termly.io/document/terms-and-conditions/8ad03f79-e4bd-492c-975c-7cb0366bc1ad" />
            <FooterItem title="About" href="/about" />
          </div>

        </div>
      </div>
    </nav>
  );
};
