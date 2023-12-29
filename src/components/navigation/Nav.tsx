import { type FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavLogo from "./NavLogo";
import NavigationList from "./NavigationList";
import NavBurgerMenu from "./NavBurgerMenu";

interface NavProps {
  handleShowModal: (
    showModal: boolean,
    modalContent: React.ReactNode | null
  ) => void;

  showModal: boolean;
}

const Nav: FC<NavProps> = ({ handleShowModal, showModal }) => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const router = useRouter();

  useEffect(() => {
    /* Function that will close services on scroll or page change, and change opacity of navibation bar if scrolled from top */
    const handleScroll = () => {
      const position = window.pageYOffset;
      const threshold = 100;

      if (position > threshold) {
        setScrolledFromTop(true);
        setOpenServices(false);
      } else {
        setScrolledFromTop(false);
      }
    };

    const handleRouteChange = () => {
      setOpenServices(false);
    };

    window.addEventListener("scroll", handleScroll);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, setOpenServices]);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 top-10 ${
        scrolledFromTop ? "bg-gray-50/70" : "bg-gray-50"
      } w-[90%] md:w-4/5 h-[6rem] rounded-full flex justify-between items-center px-padXMobile  md:px-padX shadow-md z-10`}
    >
      <NavLogo />
      <NavigationList
        openServices={openServices}
        onOpenServices={setOpenServices}
      />
      <NavBurgerMenu
        openServices={openServices}
        onOpenServices={setOpenServices}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </nav>
  );
};

export default Nav;
