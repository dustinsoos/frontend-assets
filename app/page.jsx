"use client";

import Cards from "./components/Cards";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className=" ">
      <NextSeo title="Home Page" description="Frontend-Assets" />
      <header className=" h-screen bg-slate-900 text-white">
        <div className=" px-8 md:px-16 lg:px-32 xl:px-64 flex h-screen items-center justify-between gap-4">
          <div className="text-center lg:text-left lg:w-1/3 xl:1/3 ">
            <h1 className=" text-4xl text-sky-500 font-bold mb-4">
              Frontend-Assets
            </h1>
            <h2 className="text-xl">
              Empowering Frontend Developers with Essential Resources for a
              Journey of Coding Excellence
            </h2>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <button className=" border p-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
                <a href="/resources">Resources</a>
              </button>
              <button className=" border p-2 border-white hover:bg-white hover:text-sky-500">
                <a href="/recommend">Recommend</a>
              </button>
            </div>
          </div>
          <Image
            src="/gif-homepage.gif"
            width={600}
            height={600}
            alt="homepage-gif"
            className="hidden lg:block  h-auto rounded-3xl border-2 border-sky-500 lg:w-1/2 2xl:w-1/2 "
          />
        </div>
      </header>
      <hr className=" border-sky-500" />
      <Cards />
    </main>
  );
}
