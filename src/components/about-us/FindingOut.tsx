import React from "react";
import Image from "next/image";
import CrewImg from "@/assets/crew.png";
import Informations from "./Informations";

const FindingOut = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-primary to-bgColor pt-[13rem] md:pt-0">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mx-4 lg:mx-20">
          <h1 className="text-6xl font-semibold xl:text-[5.5rem] text-center mt-[6rem]">
            How{" "}
            <span className="font-bold text-7xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              we
            </span>{" "}
            discovered <br />
            <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-8xl xl:text-[160px]">
              Logy
            </span>
            y?
          </h1>
          <div className="flex items-center justify-center md:justify-evenly mt-20">
            <div className=" flex flex-col w-full lg:w-[35%] lg:ml-20 gap-y-10">
              <div className=" flex items-center justify-center">
                <h3 className="uppercase text-center md:text-left text-5xl font-extrabold  ">
                  Little about us
                </h3>
              </div>
              <div className="flex mx-8 md:mx-0 md:items-center justify-center">
                <p className="text-xl">
                  We excel in marketing with tailored campaigns and cutting-edge
                  technology. Our web development creates dynamic, user-friendly
                  websites, while our UI/UX design ensures seamless, engaging
                  experiences. Whether you`re a startup or an established brand,
                  let us bring your vision to life.
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
