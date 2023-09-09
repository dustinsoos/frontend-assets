"use client";

import React from "react";
import { useState } from "react";

export default function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    // Filter the data based on the user's input
    const filtered = data.filter((item) => {
      const { name, about, for: purpose } = item;

      return (
        name.toLowerCase().includes(searchText) ||
        about.toLowerCase().includes(searchText) ||
        purpose.toLowerCase().includes(searchText)
      );
    });
    //Sorting the filtered data alphabetically by the "name" property
    const sortedData = [...filtered].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setFilteredData(sortedData);
    setSearchTerm(searchText);
  };
  return (
    <div className="">
      <div className="flex items-center justify-center mb-8">
        <input
          type="text"
          className="w-10/12 lg:w-1/2 border-2 p-2 md:text-lg border-slate-800 hover:border-sky-500  bg-slate-900 rounded-md text-sm "
          placeholder="HTML, CSS, JS, Framework, Library, Design, Animations"
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src="/images/search-icon.svg" alt="search-icon" className="w-14" />
      </div>
      <ul className="grid justify-center items-center text-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <li key={index} className="border-2 border-sky-500 h-full">
            <img
              src={item.img}
              alt={item.name}
              priority={true}
              className=" object-fill w-full"
            />
            <div className="p-2 grid gap-2">
              <div className=" flex items-center gap-1 justify-center">
                <h3 className=" text-sky-500">{item.name}:</h3>
                <p className="text-slate-400">{item.for}</p>
              </div>
              <p className="text-slate-400">{item.about}</p>
              <button className=" w-1/2 border  py-1 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white mx-auto">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
