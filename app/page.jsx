"use client";

import Cards from "./components/Cards";
import About from "./components/About";
import Image from "next/image";
import { NextSeo } from "next-seo";
import useLoading from "./hooks/useloading";
import LoadingSpinner from "./components/loading";

export default function Home() {
  const isLoading = useLoading();
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className=" ">
          <NextSeo title="Home Page" description="Frontend Assets" />
          <header className=" min-h-screen bg-slate-900 text-white bg-gradient-to-b from-sky-500/10 from-70%  to-slate-900/10 to-100%">
            <div className=" px-8 md:px-16 lg:px-32 xl:px-64 flex h-screen items-center justify-around ">
              <div className="text-center lg:text-left lg:w-1/2 xl:w-2/5 ">
                <h1 className=" text-4xl text-sky-500 font-bold mb-4 ">
                  Frontend Assets
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
                width={500}
                height={400}
                alt="homepage-gif"
                priority={true}
                className="hidden lg:block  rounded-3xl border-2 border-sky-500 lg:max-w-sm 2xl:max-w-md"
              />
            </div>
          </header>
          <hr className=" border-sky-500" />
          <Cards />
          <About />
        </main>
      )}
    </>
  );
}
