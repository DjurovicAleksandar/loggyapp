import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface NavServiceProps {
  imgSrc: StaticImageData;
  title: string;
  description?: string;
  href: string;
}

const NavService: FC<NavServiceProps> = ({
  imgSrc,
  title,
  description,
  href,
}) => {
  return (
    <li className="hover:opacity-100 opacity-50 ">
      <a href={href} className="flex gap-4 items-start justify-start">
        <Image src={imgSrc} className="w-3 h-3 mt-2" alt={title} />
        <div className="text-left">
          <h2 className="font-bold mb-2 text-sm">{title}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default NavService;
