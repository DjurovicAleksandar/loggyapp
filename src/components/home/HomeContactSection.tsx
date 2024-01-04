import { type FC } from "react";

interface HomeContactSectionProps {
  id: string;
}

const HomeContactSection: FC<HomeContactSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="w-full h-[50vh] lg:h-[80vh] rounded-t-[2rem] lg:rounded-t-[5rem] flex flex-col justify-center items-center px-padXMobile lg:px-0"
    >
      <h4 className="text-white text-2xl lg:text-6xl font-thin text-center mb-4">
        LET US FIX YOUR ONLINE PRESENCE
      </h4>
      <a href="#" className="text-white text-4xl lg:text-8xl font-bold ">
        CONTANCT US
      </a>
    </section>
  );
};

export default HomeContactSection;
