import Image from "next/image";
import dribble from "@/assets/images/social/dribble.png";
import linkedin from "@/assets/images/social/linkedin.png";
import instagram from "@/assets/images/social/instagram.png";
import facebook from "@/assets/images/social/facebook.png";
import FooterSocial from "./FooterSocial";

const footerSocials = [
  { src: dribble, alt: "Dribble" },
  { src: linkedin, alt: "Linkedin" },
  { src: instagram, alt: "Instagram" },
  { src: facebook, alt: "Facebook" },
];

const FooterSocials = () => {
  return (
    <ul className="flex w-full items-center justify-center md:justify-end md:items-start">
      {footerSocials.map(({ src, alt }, i) => (
        <FooterSocial key={i} src={src} alt={alt} />
      ))}
    </ul>
  );
};

export default FooterSocials;
