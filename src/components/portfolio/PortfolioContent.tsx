import { StaticImageData } from "next/image";
import { type FC } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: StaticImageData;
  thumbnail: StaticImageData;
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
  const convertedImages = projectImages.map((image) => ({
    original: image.original.src,
    thumbnail: image.thumbnail.src,
  }));

  return (
    <div
      className={`md:py-[15%] px-padXMobile md:px-padX  mt-32 lg:flex items-center justify-center bg-white shadow-md w-full relative`}
    >
      <div className="w-full h-[25rem]">
        <ImageGallery
          items={convertedImages}
          lazyLoad
          additionalClass="my-image-gallery"
          showThumbnails={false}
        />
      </div>
      <div className="w-full h-[15rem] lg:h-[25rem] text-right relative">
        <h3 className="text-gray-150 text-xs">{projectCategory}</h3>
        <h2 className="text-2xl font-bold">{projectName}</h2>
        <p className="mt-10 ">{projectDescription}</p>
        <button
          onClick={() => handleShowModal(false, null)}
          className="absolute -top-10 -right-10 text-2xl font-bold"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default PortfolioContent;
