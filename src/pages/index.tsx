import Image from "next/image";
import { Inter } from "next/font/google";

import headerImg from "@/assets/images/home/headerImg.jpg";
import Button from "@/components/general/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} w-full h-[500vh]`}>
      <main className="w-full h-scren relative">
        {/* Layer */}
        <div className="absolute inset-0 w-full h-full px-padX flex items-center">
          {/* Text */}
          <div>
            <h1 className="text-8xl">
              Upgrade your
              <br /> <span className="text-primary font-bold">
                Tech Stack
              </span>{" "}
              with <span className="font-sedmibold text-primary">us</span>!
            </h1>
            <p className="w-1/2 mt-4">
              Revamp Your Digital Presence with Expert UX/UI Design, Web
              Development, Headless E-commerce, and Platforms like WordPress,
              Webflow, Shopify, Next.js, and React.
            </p>
            <div className="mt-8 flex gap-8">
              <Button text="Get in touch" />
              <Button text="About us" />
            </div>
          </div>
          {/* Images */}
          <div></div>
        </div>
        {/* Background image */}
        <div className="w-full h-full">
          <Image alt="Header image" src={headerImg} className="h-full w-full" />
        </div>
      </main>
    </main>
  );
}
