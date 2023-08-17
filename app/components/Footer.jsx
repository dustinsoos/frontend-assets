"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setIsSubmitted(true);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Resources", link: "/resources" },
    { id: 3, label: "Recommend", link: "/recommend" },
  ];

  const socialItems = [
    { id: 4, img: "/github.svg", href: "https://github.com/" },
    { id: 5, img: "/twitter.svg", href: "https://twitter.com/" },
    { id: 6, img: "/instagram.svg", href: "https://instagram.com/" },
    { id: 7, img: "/linkedin.svg", href: "https://linkedin.com/" },
  ];
  return (
    <footer className=" bg-slate-900 text-white py-16 px-8 md:px-16 lg:px-32 xl:px-64 ">
      <div className="grid lg:flex lg:justify-evenly items-center">
        <div>
          <h3 className="text-sm">Keep up to date</h3>
          <p className="text-slate-400 text-xs">
            Join to hear about new things added!
          </p>
          <form
            action=""
            className="grid"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onSubmit={handleSubmit}
          >
            <label className="pt-2 text-slate-400 text-xs" htmlFor="email">
              Enter your email:
            </label>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="example@email.com"
                required
                className="w-1/2 border-2 p-2 text-xs border-slate-800 hover:border-sky-500  bg-slate-900 rounded-md"
              />
              <button className="border px-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md">
                Submit
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className=" bg-green-400 text-center w-3/4 mt-4 p-4 rounded-md text-black ">
              Thanks for signing up for our news letter!
            </p>
          )}
        </div>

        <div className="pt-8 ">
          <h3 className="text-sm underline">Navigation</h3>
          {navItems.map((item) => (
            <li className="list-none" key={item.id}>
              <a
                className="relative after:bg-sky-500 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-xs text-slate-400"
                href={item.link}
              >
                {item.label}
              </a>
            </li>
          ))}
        </div>
        <div className=" flex gap-4 mt-4">
          {socialItems.map((social) => (
            <li key={social.id} className=" list-none">
              <a target="_blank" href={social.href}>
                <Image
                  src={social.img}
                  alt="social-icons"
                  width={10}
                  height={10}
                  className="w-6 "
                />
              </a>
            </li>
          ))}
        </div>
        <button onClick={scrollToTop}>
          <Image
            src="/arrow-up.svg"
            alt="arrowup-icon"
            className="z-10 w-12 mt-8 mx-auto lg:mx-0  animate-bounce md:mt-0 "
            width={40}
            height={40}
          ></Image>
        </button>
      </div>
    </footer>
  );
}
