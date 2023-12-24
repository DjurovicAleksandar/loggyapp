import Image from "next/image";
import { StaticImageData } from "next/image";
import { type FC } from "react";

interface FooterSocialProps {
  src: StaticImageData;
  alt: string;
  href?: string;
}
const FooterSocial: FC<FooterSocialProps> = ({ src, alt, href = "#" }) => {
  return (
    <li
      className={`${
        alt !== "Facebook" && "border-x-[1px]"
      }  border-gray-300 p-4 opacity-50 hover:opacity-90 hover:bg-gray-100`}
    >
      <a href={href}>
        <Image
          src={src}
          alt={alt}
          className="w-[1.5rem] md:w-[2.5rem] h-[1.5rem] md:h-[2.5rem]"
        />
      </a>
    </li>
  );
};

export default FooterSocial;
