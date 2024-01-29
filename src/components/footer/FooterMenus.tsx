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
    <div className="mb-10 lg:mb-0">
      <h4 className="text-2xl font-semibold mb-4 text-primary">{menuTitle}</h4>
      <ul className="text-grayCol flex flex-col gap-4 text-lg">
        {menuItems.map(({ text, href }, i) => {
          return (
            <FooterMenuItem
              menuTitle={menuTitle}
              key={i}
              text={text}
              href={href}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenus;
