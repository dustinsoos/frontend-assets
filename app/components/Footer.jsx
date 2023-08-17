"use client";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
  }

  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Resources", link: "/resources" },
    { id: 3, label: "Recommend", link: "/recommend" },
  ];
  return (
    <footer className=" bg-slate-900 text-white py-16 px-8 md:px-16 lg:px-32 xl:px-64 ">
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
          <div className="flex gap-2">
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
        {email === 2 && <p>Hello</p>}
      </div>
      <div></div>
    </footer>
  );
}
