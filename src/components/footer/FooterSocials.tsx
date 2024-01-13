import FooterSocial from "./FooterSocial";
import IconInstagram from "../icons/socials/IconInstagram";
import IconDribble from "../icons/socials/IconDribble";
import IconFacebook from "../icons/socials/IconFacebook";
import IconLinkedin from "../icons/socials/IconLinkedin";
import { type FC } from "react";
import { Footer1stBlockProps } from "./Footer1stBlock";

const footerSocials = [
  { icon: IconDribble, alt: "Dribble" },
  { icon: IconLinkedin, alt: "Linkedin" },
  { icon: IconInstagram, alt: "Instagram" },
  { icon: IconFacebook, alt: "Facebook" },
];

const FooterSocials: FC<Footer1stBlockProps> = ({ onHmcText }) => {
  return (
    <ul className="flex w-full items-center justify-between md:justify-end md:items-start">
      {footerSocials.map(({ icon, alt }, i) => (
        <FooterSocial onHmcText={onHmcText} key={i} icon={icon} alt={alt} />
      ))}
    </ul>
  );
};

export default FooterSocials;
