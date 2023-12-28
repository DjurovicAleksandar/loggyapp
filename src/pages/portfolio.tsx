import { Inter } from "next/font/google";
import header1 from "@/assets/images/home/header1.jpg";
import Image from "next/image";
import { type FC } from "react";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDesciprtion:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDesciprtion:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDesciprtion:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDesciprtion:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDesciprtion:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [header1, header1, header1, header1, header1],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit",
  },
];

interface PortoflioProps {
  handleShowModal: (
    showModal: boolean,
    modalContent: React.ReactNode | null
  ) => void;

  showModal: boolean;
}

const portfolio: FC<PortoflioProps> = ({ handleShowModal, showModal }) => {
  return (
    <main
      className={`${inter.className} w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}
    >
      <div className="lg:mb-[10rem]">
        <h1 className="font-bold text-4xl lg:text-8xl lg:w-4/5 mb-5">
          Revolutionizing digital experience! Check our projects!
        </h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-20 rounded-xl">
        {projects.map(
          (
            {
              projectCategory,
              projectName,
              projectImages,
              projectShortDescription,
              projectDescription,
            },
            i
          ) => {
            return (
              <div
                onClick={() => handleShowModal(!showModal, <div>pp</div>)}
                key={i}
                className="cursor-pointer"
              >
                <Image
                  width={600}
                  height={600}
                  alt={projectName}
                  src={projectImages[0]}
                  className="w-full h-full lg:w-[30rem] lg:h-[30rem] rounded-xl"
                />
                <h3 className="text-gray-150 my-2">{projectCategory}</h3>
                <h2 className="text-3xl font-semibold">{projectName}</h2>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
};

export default portfolio;
