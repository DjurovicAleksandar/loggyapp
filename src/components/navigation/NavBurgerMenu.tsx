import { type FC } from "react";
import NavMobile from "@/components/navigation/NavMobile";

interface NavBurgerMenuProps {
  handleShowModal: (
    showModal: boolean,
    modalContent: React.ReactNode | null
  ) => void;
  showModal: boolean;
  openServices: boolean;
  onOpenServices: (newValue: boolean) => void;
}

const NavBurgerMenu: FC<NavBurgerMenuProps> = ({
  handleShowModal,
  showModal,
  openServices,
  onOpenServices,
}) => {
  return (
    <div
      onClick={() =>
        handleShowModal(
          !showModal,
          <NavMobile
            openServices={openServices}
            onOpenServices={onOpenServices}
          />
        )
      }
      className="md:hidden cursor-pointer group"
    >
      <div className="relative w-6 h-[0.1rem] bg-primary mb-2 duration-300 ease-linear " />
      <div className="relative w-6 h-[0.1rem] bg-primary mb-2 duration-300 ease-linear " />
      <div className="relative w-6 h-[0.1rem] bg-primary duration-300 ease-linear " />
    </div>
  );
};

export default NavBurgerMenu;
