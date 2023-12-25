import { type FC } from "react";

interface FooterMenuItemProps {
  text: string;
  href?: string;
}

const FooterMenuItem: FC<FooterMenuItemProps> = ({ href = "#", text }) => {
  return (
    <li className="hover:text-[#a6aeb9]">
      <a href={href}>{text}</a>
    </li>
  );
};

export default FooterMenuItem;
