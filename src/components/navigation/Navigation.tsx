import { type FC, useState, useEffect } from "react";
import NavServices from "./NavServices";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavProps {
  onShowModal: (showModal: boolean) => void;
  showModal: boolean;
}

const Navigation: FC<NavProps> = ({ onShowModal, showModal }) => {
  const [openServices, setOpenServices] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const threshold = 50;

      if (position > threshold) {
        onShowModal(false);
      }
    };

    const handleRouteChange = () => {
      onShowModal(false);
    };

    window.addEventListener("scroll", handleScroll);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, onShowModal]);

  return (
    <ul className="gap-5 text-black hidden md:flex">
      <li
        className="group duration-300 ease-linear cursor-pointer relative"
        onClick={(e) => {
          setOpenServices(!openServices);
        }}
      >
        <span className="group-hover:text-primary ">
          <span className="mr-1">Services</span>
          {openServices ? <span>&#11105;</span> : <span>&#11107;</span>}
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
        <Link href="#" className="hover:text-primary duration-300 ease-linear">
          Case studies
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
      <li>
        <Link
          href="/get-in-touch"
          className=" hidden md:block duration-300 ease-linear font-bold text-primary"
        >
          Get in touch
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
