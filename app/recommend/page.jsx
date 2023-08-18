"use client";

import React from "react";
import { NextSeo } from "next-seo";

export default function Recommend() {
  return (
    <>
      <NextSeo
        title="Recommend"
        description="Recommend us new resources that will be beneficial for frontend engineers!"
      />
      <main className="bg-slate-900 text-white pt-32 px-8 md:px-16 lg:px-32 xl:px-64 h-screen">
        <form className="grid gap-2 md:w-1/2 mx-auto ">
          <div className="grid ">
            <label className="text-slate-200">Name:</label>
            <input
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500 focus:outline-sky-500   bg-slate-900 rounded-md"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-slate-200">Resource Recommendation:</label>
            <input
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500 focus:outline-sky-500   bg-slate-900 rounded-md"
              placeholder="MUI, TailwindCSS, MDN, Color Hunt"
              type="text"
            />
          </div>
          <div className="grid">
            <label className="text-slate-200">Language:</label>
            <input
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500  focus:outline-sky-500   bg-slate-900 rounded-md"
              placeholder="HTML, CSS, JS, Framework, Design, Animations"
              type="text"
            />
          </div>

          <div className="grid">
            <label className="text-slate-200">What this resource does?</label>
            <textarea
              rows={4}
              cols={50}
              className="border-2 p-2 text-sm border-slate-800 hover:border-sky-500 focus:outline-sky-500   bg-slate-900 rounded-md"
              placeholder="Your thoughts on this resource and why it helped.."
              type="text"
            />
          </div>
          <button className="border w-2/5 mt-4 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md mx-auto">
            + Add Resource
          </button>
        </form>
      </main>
    </>
  );
}
