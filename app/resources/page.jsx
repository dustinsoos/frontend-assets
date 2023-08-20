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
      for: "Design, CSS",
      url: "https://colorhunt.co/",
    },
    {
      img: "/images/google-fonts.jpg",
      name: "Google Fonts",
      about:
        "Google Fonts streamlines font integration, expanding design choices for frontend developers with ease",
      for: "Design, Fonts",
      url: "https://fonts.google.com/",
    },
    {
      img: "/images/csscolours.jpg",
      name: "CSS Colours",
      about:
        "Neil Orange Peel's Colours offers inspiring palettes, aiding frontend developers in crafting stunning designs",
      for: "Design, CSS",
      url: "https://colours.neilorangepeel.com/",
    },
    {
      img: "/images/HEXtoRGB.jpg",
      name: "WebFX",
      about:
        "WebFX's Hex to RGB tool simplifies color conversion, enhancing precision for frontend development",
      for: "Design, CSS",
      url: "https://www.webfx.com/web-design/hex-to-rgb/",
    },
    {
      img: "/images/cssfonts.jpg",
      name: "CSS Fonts",
      about:
        "CSS Font Stack simplifies font selection, aiding frontend developers in optimizing typography effortlessly",
      for: "Design, CSS, Fonts",
      url: "https://www.cssfontstack.com/",
    },
    {
      img: "/images/adobecolors.jpg",
      name: "Adobe Color",
      about:
        "Adobe Color Wheel provides powerful color tools, aiding frontend developers in crafting visually stunning websites",
      for: "Design, CSS",
      url: "https://color.adobe.com/create/color-wheel",
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
