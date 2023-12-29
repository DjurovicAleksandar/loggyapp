import { Tecnology } from "../web-development/technologies";

const technologies: Tecnology[] = [
  {
    id: 1,
    category: "Frontend",
    paragraph:
      "Check out the tools we use to create clean interfaces that look great on every device.",
    languages: [
      { id: 1, language: "HTML/CSS" },
      { id: 2, language: "JavaScript" },
      { id: 3, language: "ReactJS" },
      { id: 4, language: "TypeScript" },
      { id: 5, language: "NextJS" },
      { id: 6, language: "Tailwind" },
    ],
  },
  {
    id: 2,
    category: "Backend",
    paragraph:
      "Check out the tools we use to create clean interfaces that look great on every device.",
    languages: [
      { id: 7, language: "HTML/CSS" },
      { id: 8, language: "JavaScript" },
      { id: 9, language: "ReactJS" },
      { id: 10, language: "TypeScript" },
      { id: 11, language: "NextJS" },
      { id: 12, language: "Tailwind" },
    ],
  },
];

const AppTechnologies = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col w-[80%] items-center mx-auto">
        <div className="w-full md:px-16 my-8">
          <h1 className="text-5xl text-center font-extrabold">
            Techologies we do
          </h1>
          <p className="w-full text-center md:w-[50%] mx-auto mt-10 mb-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
            debitis fuga, officia obcaecati ipsum molestiae eos odio rem at
            saepe optio ab maxime dolorum beatae?
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
                <ul className="grid md:grid-cols-2 md:grid-rows-3 gap-y-4">
                  {technology.languages.map((language) => (
                    <li key={language.id} className="text-2xl">
                      {language.language}
                    </li>
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
