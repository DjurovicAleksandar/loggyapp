import { type FC, useState, useEffect } from "react";
import Link from "next/link";

import NavServices from "./NavServices";

interface NavListProps {
  onOpenServices: (showModal: boolean) => void;
  openServices: boolean;
}

const NavigationList: FC<NavListProps> = ({ openServices, onOpenServices }) => {
  return (
    <>
      <ul className=" gap-5 text-black hidden md:flex">
        <li
          className="group duration-300 ease-linear cursor-pointer relative"
          onClick={() => {
            onOpenServices(!openServices);
          }}
        >
          <span className="group-hover:text-primary ">
            <span className="mr-1">Services</span>
          </span>
          {openServices && <NavServices />}
        </li>

        <li>
          <Link
            href="/about-us"
            className="hover:text-primary duration-300 ease-linear"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="hover:text-primary duration-300 ease-linear"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:text-primary duration-300 ease-linear"
          >
            Blog
          </Link>
        </li>
      </ul>
      <Link
        href="/get-in-touch"
        className=" hidden md:block duration-300 ease-linear font-bold text-primary"
      >
        Get in touch
      </Link>
    </>
  );
};

export default NavigationList;
