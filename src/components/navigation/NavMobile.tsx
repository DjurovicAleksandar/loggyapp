import Link from "next/link";
import { type FC, useState } from "react";
import { navServices } from "../../data/NavServicesDb";

interface NavMobileProps {
  onOpenServices: (showModal: boolean) => void;
  openServices: boolean;
}

const NavMobile: FC<NavMobileProps> = ({ onOpenServices, openServices }) => {
  return (
    <ul className="px-14 py-[25vh] text-4xl flex flex-col gap-4 font-base w-full h-full bg-gray-50">
      <li className=" hover:text-primary">
        <Link href="/">Home</Link>
      </li>
      <li
        className="group duration-300 ease-linear cursor-pointer"
        onClick={() => {
          onOpenServices(!openServices);
        }}
      >
        <span className="group-hover:text-primary ">
          <span className="mr-2">Services</span>
        </span>
      </li>
      {openServices && (
        <div className="flex flex-col gap-2">
          {navServices.map(({ serviceTitle, href }, i) => {
            return (
              <Link
                className="text-base font-light hover:text-primary"
                href={href}
                key={i}
              >
                {serviceTitle}
              </Link>
            );
          })}
        </div>
      )}
      <li className=" hover:text-primary">
        <Link href="/about-us">About</Link>
      </li>
      <li className=" hover:text-primary">
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className=" hover:text-primary">
        <Link href="/blog">Blog</Link>
      </li>

      <li className=" hover:text-primary">
        <Link href="/get-in-touch">Get in touch</Link>
      </li>
    </ul>
  );
};

export default NavMobile;
