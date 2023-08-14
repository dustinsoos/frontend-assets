import React from "react";

export default function Navbar() {
  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Resources", link: "/resources" },
    { id: 3, label: "Recommend", link: "/Recommend" },
  ];
  return (
    <nav className=" bg-slate-950 px-8 md:px-16 lg:px-32 xl:px-64">
      <ul className=" flex gap-8 py-2">
        <img />
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
