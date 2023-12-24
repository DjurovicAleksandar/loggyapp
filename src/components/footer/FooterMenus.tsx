import { FC } from "react";
import FooterMenuItem from "./FooterMenuItem";

interface MenuItem {
  text: string;
  href: string;
}

interface FooterMenusProps {
  menuTitle: string;
  menuItems: MenuItem[];
}

const FooterMenus: FC<FooterMenusProps> = ({ menuTitle, menuItems }) => {
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-4">{menuTitle}</h4>
      <ul className="text-grayCol flex flex-col gap-4 text-lg">
        {menuItems.map(({ text, href }, i) => {
          return <FooterMenuItem key={i} text={text} href={href} />;
        })}
      </ul>
    </div>
  );
};

export default FooterMenus;
