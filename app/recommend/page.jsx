"use client";

import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Recommend() {
  const [name, setName] = useState("");
  const [resource, setResource] = useState("");
  const [language, setLanguage] = useState("");
  const [textbox, setTextBox] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);
  }

  function handleClose() {
    setIsSubmitted(false);

    setName("");
    setResource("");
    setLanguage("");
    setTextBox("");
  }
  return (
    <>
      <NextSeo
        title="Recommend"
        description="Recommend us new resources that will be beneficial for frontend engineers!"
      />
      <main className="bg-slate-900 text-white pt-32 px-8 md:px-16 lg:px-32 xl:px-64 h-screen">
        <form
          className="grid gap-2 w-11/12 md:w-3/4 lg:w-3/5  2xl:w-1/2  mx-auto "
          onSubmit={handleSubmit}
        >
          <div className="grid ">
            <label className="text-slate-200">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500    bg-slate-900 rounded-md"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>
          <div className="grid">
            <label className="text-slate-200">Resource Recommendation:</label>
            <input
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500   bg-slate-900 rounded-md"
              placeholder="MUI, TailwindCSS, MDN, Color Hunt"
              type="text"
              required
            />
          </div>
          <div className="grid">
            <label className="text-slate-200">Language:</label>
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500     bg-slate-900 rounded-md"
              placeholder="HTML, CSS, JS, Framework, Design, Animations"
              type="text"
              required
            />
          </div>

          <div className="grid">
            <label className="text-slate-200">What this resource does?</label>
            <textarea
              value={textbox}
              onChange={(e) => setTextBox(e.target.value)}
              rows={4}
              cols={50}
              maxLength={150}
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500    bg-slate-900 rounded-md"
              placeholder="Your thoughts on this resource and why it helped.."
              type="text"
              required
            />
          </div>
          <button className="border w-1/5 mt-4 border-white hover:bg-white hover:text-sky-500 rounded-md mx-auto flex py-1 justify-around">
            Add
            <Image
              src="/addbtn.svg"
              width={100}
              height={100}
              className="w-6"
              alt="addicon"
            />
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-8 w-11/12  md:w-3/4 lg:w-3/5 2xl:w-1/2  mx-auto  p-4 rounded-xl bg-gradient-to-r from-slate-900 from-70%  to-sky-500/10 to-90% outline outline-sky-500 ">
            <div className="flex justify-between items-center">
              <p>{name}</p>
              <button onClick={handleClose} className=" hover:text-black">
                <Image
                  src="/closebtn.svg"
                  width={20}
                  height={20}
                  alt="closeicon"
                  className="w-6"
                />
              </button>
            </div>
            <div className="flex gap-2 text-sky-500">
              <p>{resource}</p>
              <p>|</p>
              <p> {language}</p>
            </div>
            <p className="text-slate-400">{textbox}</p>
          </div>
        )}
      </main>
    </>
  );
}
