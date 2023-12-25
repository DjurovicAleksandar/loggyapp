import { Inter } from "next/font/google";
import header1 from "@/assets/images/home/header1.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function blog() {
  return (
    <main
      className={`${inter.className} w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}
    >
      <div>
        <Image alt="Blog post" src={header1} />
      </div>
      <div>
        <h3>Blog post 1 lorem ipsum</h3>
      </div>
    </main>
  );
}
