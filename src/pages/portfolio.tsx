import { Inter } from "next/font/google";
import portfolio1 from "@/assets/images/home/portfolio1.jpg";
import Image from "next/image";
import { type FC } from "react";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
  },
  {
    projectCategory: "Development",
    projectName: "Website X",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
  },
  {
    projectCategory: "Development",
    projectName: "Website Y",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
  },
  {
    projectCategory: "Development",
    projectName: "Website O",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
  },
  {
    projectCategory: "Development",
    projectName: "Website A",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
  },
  {
    projectCategory: "Development",
    projectName: "Website B",
    projectImages: [
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
      { original: portfolio1, thumbnail: portfolio1 },
    ],
    projectShortDescription: "Lorem ipsum dolorem suit",
    projectDescription:
      "Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit Lorem ipsum dolorem suit.",
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
                onClick={() =>
                  handleShowModal(
                    !showModal,
                    <PortfolioContent
                      projectCategory={projectCategory}
                      projectName={projectName}
                      projectImages={projectImages}
                      projectDescription={projectDescription}
                      handleShowModal={handleShowModal}
                    />
                  )
                }
                key={i}
                className="cursor-pointer"
              >
                <Image
                  width={600}
                  height={600}
                  alt={projectName}
                  src={projectImages[0].original}
                  className="w-full h-full lg:w-[30rem] lg:h-[30rem] rounded-xl"
                />
                <h3 className="text-gray-150 my-2">{projectCategory}</h3>
                <h2 className="text-3xl font-semibold">{projectName}</h2>
                <p>{projectShortDescription}</p>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
};

export default portfolio;
