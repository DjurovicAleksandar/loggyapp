import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

import { type FC } from "react";

interface HomeServiceConImageProps {
  projectImg: StaticImageData;
  projectHref: string;
  translate?: boolean;
}

const HomeServiceConImage: FC<HomeServiceConImageProps> = ({
  projectImg,
  projectHref,
  translate = false,
}) => {
  return (
    <div className={`mb-10 md:mb-0 ${translate && "md:translate-y-20"}`}>
      <Link href={projectHref}>
        <Image
          alt="img1"
          src={projectImg}
          className="rounded-xl w-full h-auto md:w-[20rem] max-w-[20rem]"
        />
        <div>
          <h3 className=" font-bold my-5 lg:my-2 lg:text-2xl lg:mt-8 text-primary">
            Get Built
          </h3>
          <p>Improving process management for the GetBuilt team</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeServiceConImage;
