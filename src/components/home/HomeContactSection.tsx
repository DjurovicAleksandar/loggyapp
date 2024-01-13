import Link from "next/link";
import { type FC } from "react";

interface HomeContactSectionProps {
  id: string;
  hmcText: string;
}

const HomeContactSection: FC<HomeContactSectionProps> = ({ id, hmcText }) => {
  return (
    <section
      id={id}
      className="w-full h-[50vh]  rounded-t-[2rem] lg:rounded-t-[5rem] flex flex-col justify-end items-center py-padYMobile px-padXMobile lg:px-0"
    >
      <h4 className="text-white text-2xl lg:text-6xl font-thin text-center mb-4">
        LET US FIX YOUR ONLINE PRESENCE
      </h4>
      <Link href="#" className="text-white text-4xl lg:text-8xl font-bold ">
        {hmcText === "" ? <span>CONTACT US</span> : <span>{hmcText}</span>}
      </Link>
    </section>
  );
};

export default HomeContactSection;
