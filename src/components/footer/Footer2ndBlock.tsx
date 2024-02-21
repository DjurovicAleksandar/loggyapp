// Footer2ndBlock.tsx
import React, { useEffect, useState } from "react";
import FooterMenus from "./FooterMenus";
import { Post } from "../utils/PostFetchFunctions";

const footerMenus = [
  {
    menuTitle: "Navigation",
    menuItems: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about-us" },
      { text: "Portfolio", href: "/portfolio" },
      { text: "Blog", href: "/blog" },
      { text: "Get in touch", href: "/get-in-touch" },
    ],
  },
  {
    menuTitle: "Services",
    menuItems: [
      { text: "Product roadmapping", href: "/product-roadmapping" },
      { text: "Website development", href: "/web-development" },
      { text: "Headless eCommerce", href: "/headless-ecommerce" },
      { text: "Application Development", href: "/app-development" },
      { text: "UI/UX Design", href: "/ui-ux-design" },
      { text: "Support & Maintenance", href: "/support-maintenance" },
    ],
  },
  {
    menuTitle: "Blog",
    menuItems: [
      {
        text: "Events In the It World",
        href: "categories/itnews",
      },
      { text: "UX/UI", href: "categories/uxui" },
      { text: "Development", href: "categories/development" },
    ],
  },
];

const Footer2ndBlock = () => {
  return (
    <div className="border-y-[1px] px-padXMobile py-padYMobile text-center lg:text-left md:px-padX md:py-padY md:flex items-start justify-between">
      {footerMenus.map(({ menuTitle, menuItems }, i) => {
        return (
          <FooterMenus key={i} menuTitle={menuTitle} menuItems={menuItems} />
        );
      })}
    </div>
  );
};

export default Footer2ndBlock;
