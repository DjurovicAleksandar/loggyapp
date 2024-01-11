import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";
import markoMarkovic from "@/assets/smiling-athletic-man-black-background.png";

export type Team = {
  id: Key;
  imageUrl: StaticImageData;
  position: string;
  name: string;
};

const teamInfo: Team[] = [
  {
    id: 1,
    imageUrl: markoMarkovic,
    position: "ui | ux designer",
    name: "micic bojan",
  },
  {
    id: 2,
    imageUrl: markoMarkovic,
    position: "frontend engineer",
    name: "djurovic aleksandar",
  },
  {
    id: 3,
    imageUrl: markoMarkovic,
    position: "frontend engineer",
    name: "bujak davor",
  },
  {
    id: 4,
    imageUrl: markoMarkovic,
    position: "video editor",
    name: "skrba pavle",
  },
  {
    id: 5,
    imageUrl: markoMarkovic,
    position: "backend engineer",
    name: "milunka savic",
  },
  {
    id: 6,
    imageUrl: markoMarkovic,
    position: "web designer",
    name: "marko markovic",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="pt-[200px] pb-[100px] w-full h-full">
      <div className="flex flex-col items-center w-[80%] mx-auto h-full">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-5xl font-extrabold text-center mb-8 ">
            Meet the Team
          </h1>
          <p className="uppercase font-extrabold opacity-30 tracking-widest">
            Small Team | Big Quality
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mx-auto mt-20">
          {teamInfo.map((member) => (
            <div key={member.id} className="flex flex-col items-center mx-auto">
              <Image
                src={member.imageUrl}
                width={300}
                height={400}
                alt={member.name}
                className="border-2 border-black mb-6 shadow-lg rounded-xl"
              />
              <h3 className="capitalize font-bold text-primary text-2xl">
                {member.name}
              </h3>
              <h4 className="uppercase font-extrabold pt-2 opacity-30">
                {member.position}
              </h4>
              <div className="flex w-[15%] border-b-2 opacity-50 mt-2 border-primary shadow-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
