import { StaticImageData } from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface FooterSocialProps {
  icon: FC;
  alt: string;
  href?: string;
  onHmcText: (value: string) => void;
}
const FooterSocial: FC<FooterSocialProps> = ({
  icon: IconComponent,
  alt,
  href = "#",
  onHmcText,
}) => {
  return (
    <li
      onMouseEnter={() => onHmcText(alt.toUpperCase())}
      onMouseLeave={() => onHmcText("")}
      className={`${
        alt !== "Facebook" && "xl:border-x-[1px]"
      }  border-gray-300 p-4 opacity-50 hover:opacity-90 hover:bg-gray-100 cursor-pointer`}
    >
      <Link href={href}>
        <IconComponent />
      </Link>
    </li>
  );
};

export default FooterSocial;
