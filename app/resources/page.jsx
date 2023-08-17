"use client";

import Search from "./components/search";
import { NextSeo } from "next-seo";

export default function Resources() {
  return (
    <main className="">
      <NextSeo
        title="Resources"
        description="All the information and resources you need to help with your frontend journey!"
      />

      <div className=" h-screen bg-slate-900 text-white ">
        <p className="">Resources</p>

        <Search />
      </div>
    </main>
  );
}
