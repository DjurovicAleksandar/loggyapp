import Image from "next/image";
import Marquee from "react-fast-marquee";

import adobe from "@/assets/images/home/marquee/adobe.png";
import shopify from "@/assets/images/home/marquee/shopify.png";
import nextjs from "@/assets/images/home/marquee/nextjs.png";
import react from "@/assets/images/home/marquee/react.png";
import wordpress from "@/assets/images/home/marquee/wordpress.png";

export default function ServiceMarquee() {
  return (
    <Marquee speed={40} gradient={false} pauseOnHover={true}>
      <div className="flex w-[150vw] mr-20 items-center justify-between">
        <div className="marquee-item">
          <Image
            alt="Adobe"
            src={adobe}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Shopify"
            src={shopify}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Nextjs"
            src={nextjs}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="React"
            src={react}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Wordpress"
            src={wordpress}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Adobe"
            src={adobe}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Shopify"
            src={shopify}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Nextjs"
            src={nextjs}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="React"
            src={react}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
        <div className="marquee-item">
          <Image
            alt="Wordpress"
            src={wordpress}
            className="w-[3rem] md:w-[6rem] h-auto"
          />
        </div>
      </div>
    </Marquee>
  );
}
