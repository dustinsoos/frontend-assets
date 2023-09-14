"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Resources", link: "/resources" },
    { id: 3, label: "Recommend", link: "/recommend" },
  ];
  return (
    <header>
      <nav className=" bg-slate-950/90 px-8 md:px-16 lg:px-32 xl:px-64 text-white fixed w-full z-30">
        <ul>
          <div className=" flex justify-between ">
            <Link href="/" className=" w-14 2xl:w-16  hover:opacity-80">
              <Image
                src="/icon-frontend-asset.png"
                width={100}
                height={100}
                alt="Logo"
                priority={true}
              />
            </Link>
            <button
              className=" hover:opacity-80"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src="/menu_icon.svg"
                width={40}
                height={40}
                alt="menu-icon"
                className=" w-8 lg:w-10"
                priority={false}
              />
            </button>
          </div>

          {isOpen && (
            <div className="  w-20 mx-auto grid items-center text-center gap-6 p-4 ">
              {navItems.map((item) => (
                <li className="" key={item.id}>
                  <Link
                    className="relative after:bg-sky-500 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
