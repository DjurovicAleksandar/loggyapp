import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
      <div className="w-full h-full bg-black flex items-end justify-end rounded-xl">
        <Image
          src={imgSrc}
          alt={blogTitle}
          width={320}
          height={320}
          className="w-[20rem] h-[20rem]  opacity-80 lg:opacity-100 rounded-xl xl:rounded-r-xl"
        />
      </div>

      <div className="w-full h-full absolute inset-0 rounded-xl px-padXMobile py-padYMobile flex flex-col justify-between bg-gradient-to-r from-black to-transparent ">
        <div>
          <h3
            className={`text-primary text-2xl font-mediumlg:text-3xl ${
              colWidth && "w-full lg:w-1/2"
            }`}
          >
            {blogTitle}
          </h3>
          <p
            className={`text-xs font-thin mt-4 text-white w-ful lg:w-1/2 lg:text-sm`}
          >
            {blogDescirption.slice(0, 100)}...
          </p>
        </div>
        <Link
          href={`/blog/${href}`}
          className="bg-primary text-center text-white font-thin block w-full md:w-fit md:px-padXMobile py-2 rounded-full hover:scale-110 active:scale-90 duration-300 ease-in-out"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default HomeBlog;
