import Link from "next/link";
import { type FC } from "react";
import { footerSocials } from "../footer/FooterSocials";

interface HomeContactSectionProps {
  id: string;
  hmcText: string;
}

const HomeContactSection: FC<HomeContactSectionProps> = ({ id, hmcText }) => {
  const socialLink = footerSocials
    .filter(({ icon, alt, href }, i) => alt.toUpperCase() === hmcText)
    .map((obj, i) => obj.href)
    .join("");

  return (
    <section
      id={id}
      className="w-full h-[50vh]  rounded-t-[2rem] lg:rounded-t-[5rem] flex flex-col justify-end items-center py-padYMobile px-padXMobile lg:px-0"
    >
      <h2 className="text-white text-2xl lg:text-6xl font-thin text-center mb-4">
        LET US FIX YOUR ONLINE PRESENCE
      </h2>
      <Link
        href={hmcText === "" ? "/get-in-touch" : socialLink}
        className="text-white text-4xl lg:text-8xl font-bold"
        target="_blank"
      >
        {hmcText === "" ? <span>CONTACT US</span> : <span>{hmcText}</span>}
      </Link>
    </section>
  );
};

export default HomeContactSection;
