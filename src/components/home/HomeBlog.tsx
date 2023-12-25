import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface HomeBlogProps {
  imgSrc: StaticImageData;
  blogTitle: string;
  blogDescirption: string;
  href: string;
  colWidth?: boolean;
}

const HomeBlog: FC<HomeBlogProps> = ({
  imgSrc,
  blogTitle,
  blogDescirption,
  href,
  colWidth,
}) => {
  return (
    <div
      className={`relative w-full h-[20rem] ${
        colWidth ? "lg:w-[99%]" : "lg:w-[49%]"
      }`}
    >
      <Image
        src={imgSrc}
        alt={blogTitle}
        className="w-full h-full rounded-xl opacity-80 lg:opacity-100"
      />

      <div className="w-full h-full absolute inset-0 rounded-xl px-padXMobile py-padYMobile flex flex-col justify-between bg-gradient-to-r from-black to-transparent">
        <div>
          <h3 className="text-primary text-2xl font-semibold lg:text-4xl">
            {blogTitle}
          </h3>
          <p
            className={`text-sm font-base mt-4 text-white ${
              colWidth ? "lg:w-1/2" : "w-full"
            } lg:text-lg`}
          >
            {blogDescirption}
          </p>
        </div>
        <a
          href={href}
          className="bg-primary text-center color-black block w-full md:w-fit md:px-padXMobile py-2 rounded-full"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default HomeBlog;
