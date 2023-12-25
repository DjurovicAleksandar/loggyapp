import { type FC, useState, useEffect } from "react";
import NavServices from "./NavServices";

interface NavProps {
  onShowModal: (showModal: boolean) => void;
  showModal: boolean;
}

const Nav: FC<NavProps> = ({ onShowModal, showModal }) => {
  const [openServices, setOpenServices] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      const threshold = 100;

      if (position > threshold) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 top-10 ${
        scrolledFromTop ? "bg-gray-50/70" : "bg-gray-50"
      } w-[90%] md:w-4/5 h-[6rem] rounded-full flex justify-between items-center px-padXMobile  md:px-padX shadow-md z-10`}
    >
      <h2 className="logo font-bold text-primary">LOGGY</h2>
      <ul className=" gap-5 text-black hidden md:flex">
        <li>
          <a href="#" className="hover:text-primary duration-300 ease-linear">
            Home
          </a>
        </li>
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
          <a href="#" className="hover:text-primary duration-300 ease-linear">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary duration-300 ease-linear">
            Case studies
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary duration-300 ease-linear">
            Blog
          </a>
        </li>
      </ul>
      <a
        href="#"
        className=" hidden md:block duration-300 ease-linear font-bold text-primary"
      >
        Get in touch
      </a>
      <div
        onClick={() => onShowModal(!showModal)}
        className="md:hidden cursor-pointer group"
      >
        <div className="relative w-6 h-[0.1rem] bg-primary mb-2 duration-300 ease-linear " />
        <div className="relative w-6 h-[0.1rem] bg-primary mb-2 duration-300 ease-linear " />
        <div className="relative w-6 h-[0.1rem] bg-primary duration-300 ease-linear " />
      </div>
    </nav>
  );
};

export default Nav;
