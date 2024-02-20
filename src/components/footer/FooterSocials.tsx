import FooterSocial from "./FooterSocial";
import IconInstagram from "../icons/socials/IconInstagram";
import IconDribble from "../icons/socials/IconDribble";
import IconFacebook from "../icons/socials/IconFacebook";
import IconLinkedin from "../icons/socials/IconLinkedin";
import { type FC } from "react";
import { Footer1stBlockProps } from "./Footer1stBlock";

export const footerSocials = [
  {
    icon: IconDribble,
    alt: "Dribble",
    href: "https://dribbble.com/gr8solutions",
  },
  {
    icon: IconLinkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/company/gr8solutionsagency",
  },
  {
    icon: IconInstagram,
    alt: "Instagram",
    href: "https://www.instagram.com/gr8solutions.agency/",
  },
  {
    icon: IconFacebook,
    alt: "Facebook",
    href: "https://www.facebook.com/gr8solutionsagency/",
  },
];

const FooterSocials: FC<Footer1stBlockProps> = ({ onHmcText }) => {
  return (
    <ul className="flex w-full items-center justify-between md:justify-end md:items-start">
      {footerSocials.map(({ icon, alt, href }, i) => (
        <FooterSocial
          onHmcText={onHmcText}
          key={i}
          icon={icon}
          alt={alt}
          href={href}
        />
      ))}
    </ul>
  );
};

export default FooterSocials;
