"use client";

import { NextSeo } from "next-seo";
import SearchBar from "./components/searchbar";

export default function Resources() {
  const resourceData = [
    {
      img: "",
      name: "Color Hunt",
      about: "This is a great tool for finding color palettes for your website",
      for: "Design",
      url: "https://colorhunt.co/",
    },
  ];
  return (
    <main className="bg-slate-900 text-white pt-32 px-8 md:px-16 lg:px-32 xl:px-64 h-screen overflow-x-auto ">
      <NextSeo
        title="Resources"
        description="All the information and resources you need to help with your frontend journey!"
      />

      <div className=" h-screen bg-slate-900 text-white ">
        <p className="">Resources</p>
        <SearchBar data={resourceData} />
      </div>
    </main>
  );
}
