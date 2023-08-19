"use client";

import Link from "next/link";
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

    setFilteredData(filtered);
    setSearchTerm(searchText);
  };
  return (
    <div>
      <input
        type="text"
        className="text-black"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="text-slate-400">{item.about}</p>
            <p className="text-slate-400">{item.for}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
