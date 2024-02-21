import React from "react";
import ImageDes from "@/assets/images/home/header1.jpg";
import Image from "next/image";

import research from "@/assets/images/services/roadmapping/research.jpg";
import monitor from "@/assets/images/services/roadmapping/monitor.jpg";
import update from "@/assets/images/services/roadmapping/update.jpg";

const RoadmapProcess = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] mx-auto">
        <div className="w-full flex flex-col items-center gap-y-10 mb-10">
          <h1 className="text-5xl w-full font-extrabold text-center">
            How does{" "}
            <span className=" bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Product Roadmapping
            </span>{" "}
            work?
          </h1>
          <p className="md:w-[70%] w-full text-center">
            At Logyy, our Product Roadmapping process is designed for thorough
            exploration and strategic alignment.
          </p>
          <p className="md:w-[75%] w-full text-center">
            Facilitated through interactive Zoom sessions, these engagements
            typically span from 4 hours to a full day, providing the necessary
            space for comprehensive discussions.Importantly, these sessions are
            recorded, ensuring that valuable discussions are preserved and can
            be revisited.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="hidden md:flex p-6 ">
            <Image
              className="rounded-xl w-full h-full"
              src={research}
              alt="Loggy - Research"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="text-4xl font-bold text-primary">
              Conduct Research
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              Through market, user, and stakeholder research inform our roadmap,
              aligning it with industry trends and business objectives.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 p-6">
            <h3 className="text-4xl font-bold text-primary ">
              Implement & Monitor
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-[25rem]">
              Our teams implement features with precision, while vigilant
              monitoring ensures adaptability and prompt issue resolution.
            </p>
          </div>
          <div className="hidden md:flex p-6">
            <Image
              className="rounded-xl"
              src={monitor}
              alt="Loggy - Implement & Monitor"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="hidden md:flex p-6">
            <Image
              className="rounded-xl"
              src={update}
              alt="Loggy - Evaluate & Update"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="text-4xl font-bold text-primary">
              Evaluate & Update
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              Post-implementation, we analyze feedback and metrics, using
              insights to refine the roadmap and stay responsive to evolving
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapProcess;
