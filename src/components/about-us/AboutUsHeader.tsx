import React from "react";
import Image from "next/image";
import BackgroundImage from "@/assets/9495909.jpg";

const AboutUsHeader = () => {
  return (
    <main className="flex w-full h-screen relative">
      {/* img */}
      <div className="w-full h-full">
        <Image src={BackgroundImage} fill alt="bgimg" />
      </div>
      {/* overlay */}
      <div className="absolute w-full h-fit inset-0 pt-[10%]">
        <div className="flex flex-col items-center justify-center mx-10 lg:mx-[25%]  ">
          <div className="flex items-center justify-center w-full ">
            <h3 className="font-extrabold opacity-75 text-primary border-b-2 border-orange-300">
              ABOUT US
            </h3>
          </div>
          <div className="md:px-20 w-full mt-[50px]">
            <h1 className="font-bold text-center text-3xl md:text-5xl leading-[55px]">
              Your digital success starts here.{" "}
              <span className="text-4xl md:text-6xl text-primary">Logyy</span>{" "}
              Mastering Marketing, Web Development and
              <span className="text-4xl md:text-6xl text-primary">
                {" "}
                UI|UX
              </span>{" "}
              Design.
            </h1>
            <p className="text-center mt-16 md:px-10 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ipsa enim placeat temporibus excepturi repellat officiis
              consequuntur vitae non, id dolorum illo numquam quidem fugit
              voluptatum neque molestias fugiat nisi?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUsHeader;
