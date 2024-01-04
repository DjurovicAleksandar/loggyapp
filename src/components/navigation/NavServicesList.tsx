import { serviceArray } from "@/data/NavServicesDb";
import NavService from "./NavService";

const NavServicesList = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 px-padXMobile py-padYMobile">
      {serviceArray.map(({ serviceTitle, imgSrc, description, href }, i) => {
        return (
          <NavService
            key={i}
            title={serviceTitle}
            imgSrc={imgSrc}
            description={description}
            href={href}
          />
        );
      })}
    </ul>
  );
};

export default NavServicesList;
