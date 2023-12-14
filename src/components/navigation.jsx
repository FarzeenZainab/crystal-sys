import React from "react";
import NavItem from "./nav-item";

const Navigation = () => {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Favourites",
      href: "/my-favourites",
    },
    {
      title: "Menu",
      href: "/menu",
    },
    {
      title: "About me",
      href: "/about-me",
    },
    {
      title: "Generate Meal",
      href: "/meal-generator",
    },
  ];
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {pages.map((page) => (
          <NavItem key={page.title} title={page?.title} href={page?.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
