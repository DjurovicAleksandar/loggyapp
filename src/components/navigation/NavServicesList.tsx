import { navServices } from "@/data/NavServicesDb";
import NavService from "./NavService";

const NavServicesList = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 px-padXMobile py-padYMobile">
      {navServices.map(({ serviceTitle, imgSrc, descritpion, href }, i) => {
        return (
          <NavService
            key={i}
            title={serviceTitle}
            imgSrc={imgSrc}
            description={descritpion}
            href={href}
          />
        );
      })}
    </ul>
  );
};

export default NavServicesList;
