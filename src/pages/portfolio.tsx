import Image from "next/image";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import { projects } from "@/data/ProjectsDb";
import { useModal } from "@/components/general/ModalContext";

const Portfolio = () => {
  const { showModal, setShowModal } = useModal();

  return (
    <main className={` w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}>
      <div className="lg:mb-[10rem]">
        <h1 className="text-4xl lg:text-8xl lg:w-4/5 mb-5">
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
                  setShowModal(
                    !showModal,
                    <PortfolioContent
                      projectCategory={projectCategory}
                      projectName={projectName}
                      projectImages={projectImages}
                      projectDescription={projectDescription}
                      handleShowModal={setShowModal}
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

export default function portfolio() {
  return <Portfolio />;
}
