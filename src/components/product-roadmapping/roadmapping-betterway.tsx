import React from "react";
import { Technologies } from "../support-maintenance/technologies-supporting";
import Image from "next/image";
import cash from "@/assets/images/flaticons/cash.png";
import calendar from "@/assets/images/flaticons/calendar.png";
import statistic from "@/assets/images/flaticons/statistic.png";
import time from "@/assets/images/flaticons/time.png";
import responsive from "@/assets/images/flaticons/responsive-design.png";
import solution from "@/assets/images/flaticons/solutions.png";

const techs: Technologies[] = [
  {
    id: 1,
    title: "Better way to do",
    paragraph:
      "A well-crafted product roadmap is an essential tool for businesses looking to align their efforts with strategic goals, communicate effectively, prioritize tasks, manage resources efficiently, and adapt to changes in the dynamic business environment.",
    language: [
      {
        id: 2,
        name: "Quality & Better performance",
        flaticon: statistic,
        description:
          "Craft a dynamic product roadmap to seamlessly integrate quality improvements and performance enhancements, aligning your product evolution with strategic objectives.",
      },
      {
        id: 3,
        name: "Stay within your budget",
        flaticon: cash,
        description:
          "Craft a product roadmap that aligns with your budget constraints, ensuring efficient resource utilization and strategic alignment with financial goals.",
      },
      {
        id: 4,
        name: "Timely Deliverables",
        flaticon: time,
        description:
          "Commit to delivering roadmaps on time, respecting our clients' schedules and contributing to the efficiency of their product development cycles.",
      },
      {
        id: 5,
        name: "Responsive Iteration",
        flaticon: responsive,
        description:
          "Responsive to client feedback, facilitating iterative adjustments to the roadmap to accommodate changing priorities or market conditions.",
      },
      {
        id: 6,
        name: "Maximize efficiency, minimize costs",
        flaticon: calendar,
        description:
          "Efficiently plan and execute product roadmaps to optimize operations, achieving maximum efficiency and cost-effectiveness in alignment with organizational goals.",
      },
      {
        id: 7,
        name: "Innovative Solutions",
        flaticon: solution,
        description:
          "Strive for innovative and tailored roadmaps, delivering solutions that not only meet but exceed client expectations.",
      },
    ],
  },
];

const RoadmapBusiness = () => {
  return (
    <div className="w-full bg-bgColor">
      {techs.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center mx-auto w-[90%] md:w-[80%]"
        >
          <div className="flex flex-col items-center justify-center w-full mx-auto ">
            <h2 className="text-5xl text-center font-extrabold">
              {item.title}{" "}
              <span className=" bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
                business
              </span>
            </h2>
            <p className="w-full md:w-[60%] text-center pt-8">
              {item.paragraph}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-around mx-auto mt-10 py-14 ">
            <div className="grid gap-x-[50px] gap-y-[150px] md:grid-cols-2 lg:grid-cols-3 ">
              {item.language.map((items) => (
                <div
                  key={items.id}
                  className="flex flex-col items-center rounded-xl shadow-lg py-6 hover:scale-105 duration-300 ease-in-out"
                >
                  <Image src={items.flaticon} width={50} alt="flaticon" />
                  <h3 className="capitalize font-bold text-center text-primary text-2xl mt-5">
                    {items.name}
                  </h3>
                  <p className="px-5 py-10 text-center">{items.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapBusiness;
