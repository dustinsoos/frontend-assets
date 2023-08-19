"use client";

import { NextSeo } from "next-seo";
import SearchBar from "./components/searchbar";

export default function Resources() {
  const resourceData = [
    {
      img: "/images/colorhunt.jpg",
      name: "Color Hunt",
      about:
        "This is a great tool  used for discovering and exploring color palettes for design inspiration",
      for: "Design",
      url: "https://colorhunt.co/",
    },
    {
      img: "/images/google-fonts.jpg",
      name: "Google Fonts",
      about:
        "Google Fonts offers diverse, easy-to-integrate fonts, enhancing web design and user experience effortlessly",
      for: "Design, Fonts",
      url: "https://fonts.google.com/",
    },
  ];
  return (
    <main className=" bg-slate-900 min-h-screen">
      <div className="bg-slate-900 text-white pt-32 px-8 md:px-16 lg:px-32 xl:px-64 h-auto pb-32">
        <NextSeo
          title="Resources"
          description="All the information and resources you need to help with your frontend journey!"
        />

        <div className=" bg-slate-900 text-white ">
          <SearchBar data={resourceData} />
        </div>
      </div>
    </main>
  );
}
