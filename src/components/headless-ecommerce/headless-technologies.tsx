import React, { Key } from "react";

type Techs = {
  id: Key;
  name: string;
  description: string;
};

const techology: Techs[] = [
  {
    id: 1,
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 2,
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 3,
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 4,
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 5,
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
];

const HeadlessTechs = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col items-start justify-center mx-auto w-[90%] md:w-[80%]">
        <div className="w-[50%] mx-auto flex items-center justify-center md:px-16 py-10">
          <h1 className="text-5xl font-extrabold text-center">
            Technologies that we are using
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:mx-auto my-10 w-full md:w-[70%]">
          {techology.map((exp) => (
            <div
              className="flex flex-col items-center my-8 md:mx-6 px-3 py-16 rounded-lg shadow-md"
              key={exp.id}
            >
              <div className="px-5 mb-6">
                <h3 className="capitalize font-bold text-center text-primary text-3xl">
                  {exp.name}
                </h3>
              </div>
              <div className="px-10">
                <p className="text-center">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlessTechs;
