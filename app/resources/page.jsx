"use client";

import { NextSeo } from "next-seo";
import SearchBar from "./components/searchbar";
import LoadingSpinner from "../components/loading";
import { useEffect, useState } from "react";

export default function Resources() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page has been loaded in this session.
    const hasPageLoadedInSession = sessionStorage.getItem(
      "hasPageLoadedInSession"
    );

    if (hasPageLoadedInSession) {
      // If the page has loaded in this session, don't show the loading spinner.
      setIsLoading(false);
    } else {
      // If it's the first time loading the page in this session, simulate a delay.
      setTimeout(() => {
        setIsLoading(false);

        // Set a flag in sessionStorage to indicate that the page has loaded in this session.
        sessionStorage.setItem("hasPageLoadedInSession", "true");
      }, 3000); // Set the duration in milliseconds (3 seconds in this example).
    }
  }, []);

  const resourceData = [
    {
      img: "/images/adobecolors.jpg",
      name: "Adobe Color",
      about:
        "Adobe Color Wheel provides powerful color tools, aiding frontend developers in crafting visually stunning websites",
      for: "Design, CSS",
      url: "https://color.adobe.com/create/color-wheel",
    },
    {
      img: "/images/colorhunt.jpg",
      name: "Color Hunt",
      about:
        "This is a great tool  used for discovering and exploring color palettes for design inspiration",
      for: "Design, CSS",
      url: "https://colorhunt.co/",
    },
    {
      img: "/images/collectui.jpg",
      name: "CollectUI",
      about:
        "CollectUI offers design inspiration, showcasing user interface and interaction design examples",
      for: "Design",
      url: "https://collectui.com/",
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
      img: "/images/css3buttongenerator.jpg",
      name: "css3buttongenerator",
      about:
        "CSS3 Button Generator creates custom buttons with style, color, and hover effects",
      for: "CSS",
      url: "https://css3buttongenerator.com/",
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
      img: "/images/fontawesome.jpg",
      name: "Font Awesome",
      about:
        "Font Awesome offers a vast library of vector icons for web and app design",
      for: "Design, Icons",
      url: "https://fontawesome.com/",
    },
    {
      img: "/images/frontendmentor.jpg",
      name: "Frontendmentor",
      about:
        "Frontend Mentor provides real-world coding challenges to improve web development skills",
      for: "Design, Practice",
      url: "https://www.frontendmentor.io/",
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
      img: "/images/webcode.jpg",
      name: "Webcode",
      about:
        "Webcode.tools offers a CSS keyframe animation generator for creating dynamic web animations",
      for: "CSS, Animations",
      url: "https://webcode.tools/generators/css/keyframe-animation",
    },

    {
      img: "/images/webdev.jpg",
      name: "Web.Dev",
      about:
        "Web.dev provides guides for using semantic HTML to enhance website structure and accessibility",
      for: "HTML",
      url: "https://web.dev/learn/html/semantic-html/",
    },

    {
      img: "/images/HEXtoRGB.jpg",
      name: "WebFX",
      about:
        "WebFX's Hex to RGB tool simplifies color conversion, enhancing precision for frontend development",
      for: "Design, CSS",
      url: "https://www.webfx.com/web-design/hex-to-rgb/",
    },
  ];

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </>
  );
}
