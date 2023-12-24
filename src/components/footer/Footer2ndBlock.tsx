// Footer2ndBlock.tsx
import React from "react";
import FooterMenus from "./FooterMenus";

const menus = [
  {
    menuTitle: "Navigation",
    menuItems: [
      { text: "Home", href: "#" },
      { text: "Services", href: "#" },
      { text: "About", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Get in touch", href: "#" },
    ],
  },
  {
    menuTitle: "Services",
    menuItems: [
      { text: "Home", href: "#" },
      { text: "Services", href: "#" },
      { text: "About", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Get in touch", href: "#" },
    ],
  },
  {
    menuTitle: "Blog",
    menuItems: [
      { text: "Home", href: "#" },
      { text: "Services", href: "#" },
      { text: "About", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Get in touch", href: "#" },
    ],
  },
];

const Footer2ndBlock = () => {
  return (
    <div className="border-y-[1px] px-padXMobile py-padYMobile text-center md:px-padX md:py-padY md:flex items-start justify-between">
      {menus.map(({ menuTitle, menuItems }, i) => {
        return (
          <FooterMenus key={i} menuTitle={menuTitle} menuItems={menuItems} />
        );
      })}
    </div>
  );
};

export default Footer2ndBlock;
