import React from "react";
import Image from "next/image";
import CrewImg from "@/assets/crew.png";
import Informations from "./Informations";

const FindingOut = () => {
  return (
    <div className="w-full h-full bg-bgColor">
      <div className="w-full bg-secondary">
        <div className="flex flex-col items-center justify-center mx-4 lg:mx-20">
          <h1 className="text-5xl md:text-8xl font-bold text-center text-white mt-[6rem] leading-[95px]">
            How <span className="text-primary">we</span> found <br />
            <span className="text-primary text-8xl md:text-[160px]">Logy</span>
            y?
          </h1>
          <div className="flex w-[20%] flex-1 border-b-4 opacity-50 mt-16 border-primary shadow-md"></div>
          <div className="flex items-center justify-center md:justify-evenly mt-20">
            <div className=" flex flex-col w-full lg:w-[35%] lg:ml-20 gap-y-10">
              <div className=" flex items-center justify-center">
                <h3 className="uppercase text-center text-5xl font-extrabold">
                  Little about us
                </h3>
              </div>
              <div className="flex mx-8 md:mx-0 md:items-center justify-center">
                <p className="text-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, qui eius odio aspernatur mollitia ea dolor velit
                  non earum alias commodi rem vel? Voluptatibus ratione deleniti
                  ipsum laudantium atque quas.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. <br /> Voluptatibus, qui eius
                  odio aspernatur mollitia ea dolor velit non earum alias
                  commodi rem vel?
                </p>
              </div>
            </div>
            <div className="hidden lg:flex w-[60%]">
              <Image src={CrewImg} alt="crew" />
            </div>
          </div>
          <Informations />
        </div>
      </div>
    </div>
  );
};

export default FindingOut;
