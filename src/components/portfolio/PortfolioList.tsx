import Image from "next/image";
import { type FC } from "react";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import { projects } from "@/data/ProjectsDb";

interface PortoflioProps {
  handleShowModal: (
    showModal: boolean,
    modalContent: React.ReactNode | null
  ) => void;

  showModal: boolean;
}

const PortfolioList: FC<PortoflioProps> = ({ handleShowModal, showModal }) => {
  return (
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
  );
};

export default PortfolioList;
