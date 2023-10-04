"use client";

import Cards from "./components/Cards";
import About from "./components/About";
import Image from "next/image";
import { NextSeo } from "next-seo";
import LoadingSpinner from "./components/loading";
import useLoading from "./hooks/useloading";
import Link from "next/link";

export default function Home() {
  let isLoading = useLoading();
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className=" ">
          <NextSeo title="Home Page" description="Frontend Assets" />
          <section className=" min-h-screen bg-slate-900 text-white bg-gradient-to-b from-sky-500/10 from-70%  to-slate-900/10 to-100%">
            <div className=" px-8 md:px-16 lg:px-32 xl:px-64 flex h-screen items-center justify-around ">
              <div className="text-center lg:text-left md:w-9/12  lg:w-3/5  ">
                <h1 className="text-6xl  lg:text-7xl 2xl:text-8xl text-sky-500 font-bold mb-4 ">
                  <span className="bg-gradient-to-r from-sky-500  to-slate-400 inline-block text-transparent bg-clip-text">
                    Frontend
                  </span>{" "}
                  <span className="bg-gradient-to-r from-sky-500  to-slate-400 inline-block text-transparent bg-clip-text">
                    Assets
                  </span>
                </h1>
                <h2 className="text-lg lg:w-3/4  xl:w-9/12 2xl:w-7/12">
                  Empowering Frontend Developers with Essential Resources for a
                  Journey of Coding Excellence
                </h2>
                <div className="flex gap-4 mt-8 justify-center lg:justify-start ">
                  <button className=" border p-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
                    <Link href="/resources">Resources</Link>
                  </button>
                  <button className=" border p-2 border-white hover:bg-white hover:text-sky-500">
                    <Link href="/recommend">Recommend</Link>
                  </button>
                </div>
              </div>
              <Image
                src="/gif-homepage.gif"
                width={600}
                height={600}
                alt="homepage-gif"
                priority={true}
                className="hidden lg:block p-1 bg-gradient-to-r from-sky-500 to-slate-400  lg:max-w-md 2xl:max-w-3xl rounded-3xl 2xl:w-1/2 "
              />
            </div>
          </section>
          <hr className=" border-sky-500" />
          <Cards />
          <About />
        </main>
      )}
    </>
  );
}
