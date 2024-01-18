import { Tecnology } from "../web-development/technologies";
import Image from "next/image";
import arrow from "@/assets/images/flaticons/7.png";

const technologies: Tecnology[] = [
  {
    id: 1,
    category: "Frontend",
    paragraph:
      "Check out the tools we use to create clean interfaces that look great on every device.",
    languages: [
      { id: 1, flaticon: arrow, language: "HTML/CSS" },
      { id: 2, flaticon: arrow, language: "JavaScript" },
      { id: 3, flaticon: arrow, language: "ReactJS" },
      { id: 4, flaticon: arrow, language: "TypeScript" },
      { id: 5, flaticon: arrow, language: "NextJS" },
      { id: 6, flaticon: arrow, language: "Tailwind" },
    ],
  },
  {
    id: 2,
    category: "Backend",
    paragraph:
      "Check out the tools we use to create clean interfaces that look great on every device.",
    languages: [
      { id: 7, flaticon: arrow, language: "MySQL" },
      { id: 8, flaticon: arrow, language: "Node.js" },
      { id: 9, flaticon: arrow, language: "GraphQL" },
      { id: 10, flaticon: arrow, language: "TypeScript" },
      { id: 11, flaticon: arrow, language: "NextJS" },
      { id: 12, flaticon: arrow, language: "Tailwind" },
    ],
  },
];

const AppTechnologies = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col w-[80%] items-center mx-auto">
        <div className="w-full md:px-16 my-8">
          <h1 className="text-5xl text-center font-extrabold">
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Techologies
            </span>{" "}
            we do
          </h1>
          <p className="w-full text-center md:w-[70%] mx-auto mt-10 mb-20">
            Web development involves a diverse set of technologies covering both
            frontend and backend development.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around w-full md:py-20">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="flex flex-col items-center md:items-start gap-y-5 w-full md:mx-14 p-6"
            >
              <h3 className="text-4xl text-center md:text-left mx-auto text-primary font-extrabold w-full">
                {technology.category}
              </h3>
              <p className="w-full md:w-[80%] text-center md:text-left">
                {technology.paragraph}
              </p>
              <div className="flex flex-col items-center md:items-start justify-center w-full mx-auto mt-6">
                <ul className="grid md:grid-cols-2 md:grid-rows-3 gap-4">
                  {technology.languages.map((language) => (
                    <div key={language.id} className="flex flex-row gap-x-3">
                      <Image
                        src={language.flaticon}
                        width={20}
                        height={20}
                        alt=""
                      />
                      <li className="text-xl text-primary">
                        {language.language}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppTechnologies;
