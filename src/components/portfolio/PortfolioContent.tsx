import { StaticImageData } from "next/image";
import { useState, type FC } from "react";
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

  const [isGalleryFullscreen, setIsGalleryFullscreen] = useState(false);

  const onScreenChange = (fullScreenElement: boolean) => {
    setIsGalleryFullscreen(!!fullScreenElement);
  };

  return (
    <div
      className={`md:py-[15%] px-padXMobile rounded-xl mt-28 lg:mt-36 flex flex-col-reverse lg:flex-row items-center justify-center  lg:h-[25rem]  shadow-md relative bg-white`}
    >
      <div className="w-full lg:h-[25rem] py-5 lg:py-0">
        <ImageGallery
          items={convertedImages}
          lazyLoad
          additionalClass={
            isGalleryFullscreen
              ? "my-image-gallery fullscreen-mode"
              : "my-image-gallery"
          }
          showThumbnails={false}
          onScreenChange={onScreenChange}
        />
      </div>
      <div className="w-full h-[15rem] lg:h-[25rem] lg:text-right relative flex flex-col items-start lg:items-end mt-5 lg:mt-0 ">
        <h3 className="text-gray-150 text-xs lg:mt-10">{projectCategory}</h3>
        <h2 className="text-2xl font-bold">{projectName}</h2>
        <p className="mt-10 lg:w-1/2 ">{projectDescription}</p>
        <button
          onClick={() => handleShowModal(false, null)}
          className="absolute right-0 lg:-top-10 lg:-right-8  text-4xl font-thin"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default PortfolioContent;
