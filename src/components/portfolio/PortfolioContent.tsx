import Image, { StaticImageData } from "next/image";
import { useState, type FC } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import FsLightbox from "fslightbox-react";

interface ImageItem {
  original: StaticImageData;
}

interface PortfolioContentProps {
  projectCategory: string;
  projectName: string;
  projectImages: ImageItem[];
  projectDescription: string;
  handleShowModal: (
    showModal: boolean,
    modalContent: React.ReactNode | null
  ) => void;
}

const PortfolioContent: FC<PortfolioContentProps> = ({
  projectCategory,
  projectName,
  projectImages,
  projectDescription,
  handleShowModal,
}) => {
  const convertedImages = projectImages.map((image) => image.original.src);

  const [toggler, setToggler] = useState(false);


  return (
    <div className="bg-white shadow-md rounded-xl lg:w-1/2 lg:flex  mt-[5rem] lg:mt-[10rem] lg:px-padXMobile lg: py-padYMobile lg:h-[25rem]">
      <div className="w-full relative">
        <Image
          onClick={() => setToggler(!toggler)}
          src={projectImages[0].original}
          alt={projectName}
          width={400}
          height={400}
          className="cursor-pointer rounded-xl w-[15rem] h-full lg:w-[25rem] mx-auto"
        />
        <p className="text-center">Click on image for more</p>
        <p className="mt-5 lg:hidden text-sm text-center">
          {projectDescription}
        </p>
        <button
          onClick={() => handleShowModal(false, null)}
          className="absolute -top-9 right-0 z-[100] text-4xl font-bold block lg:hidden"
        >
          x
        </button>
      </div>
      <FsLightbox toggler={toggler} sources={convertedImages} />

      <div className="hidden lg:text-right relative lg:flex flex-col items-start lg:items-end mt-5 lg:mt-0 w-fit">
        <h3 className="text-gray-150 text-xs lg:mt-10">{projectCategory}</h3>
        <h2 className="text-2xl font-bold">{projectName}</h2>
        <p className="text-xs w-4/5">{projectDescription}</p>
        <button
          onClick={() => handleShowModal(false, null)}
          className="absolute right-0 lg:-top-5 lg:-right-5 z-[100] text-4xl font-bold"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default PortfolioContent;
