import Link from "next/link";
import { type FC } from "react";

interface FooterMenuItemProps {
  text: string;
  href?: string;
  menuTitle: string;
}

const FooterMenuItem: FC<FooterMenuItemProps> = ({
  href = "#",
  text,
  menuTitle,
}) => {
  return (
    <li className={`hover:text-primary`}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default FooterMenuItem;
