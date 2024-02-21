import Image from "next/image";
import { useModal } from "@/components/general/ModalContext";
import Head from "next/head";
import header1 from "@/assets/1813 (1).jpg";

import { useState } from "react";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
const Portfolio = () => {
  const { showModal, setShowModal } = useModal();
  const [portfolioCategory, setPortfolioCategory] = useState("development");

  return (
    <main className={` w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}>
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/3 px-3 pt-10 lg:pt-20 pb-10">
              <ul>
                <li
                  className="mr-4 md:mr-0 mb-4 md:mb-10 lg:mb-16"
                  onClick={() => setPortfolioCategory("development")}
                >
                  <span
                    className={`inline-block pl-4 text-2xl font-semibold ${
                      portfolioCategory === "development"
                        ? " border-l-2 border-primary text-gray-900"
                        : "text-gray-500"
                    } cursor-pointer`}
                  >
                    Web development
                  </span>
                </li>
                <li
                  className="mr-4 md:mr-0 mb-4 md:mb-10 lg:mb-16"
                  onClick={() => setPortfolioCategory("eCommerce")}
                >
                  <span
                    className={`inline-block pl-4 text-2xl font-semibold ${
                      portfolioCategory === "eCommerce"
                        ? " border-l-2 border-primary text-gray-900"
                        : "text-gray-500"
                    } cursor-pointer`}
                  >
                    eCommerce
                  </span>
                </li>
                <li
                  className="mr-4 md:mr-0 mb-4 md:mb-10 lg:mb-16"
                  onClick={() => setPortfolioCategory("uxui")}
                >
                  <span
                    className={`inline-block pl-4 text-2xl font-semibold ${
                      portfolioCategory === "uxui"
                        ? " border-l-2 border-primary text-gray-900"
                        : "text-gray-500"
                    } cursor-pointer`}
                  >
                    UX/UI
                  </span>
                </li>
                <li
                  className="mr-4 md:mr-0 mb-4 md:mb-10 lg:mb-16"
                  onClick={() => setPortfolioCategory("logo")}
                >
                  <span
                    className={`inline-block pl-4 text-2xl font-semibold ${
                      portfolioCategory === "logo"
                        ? " border-l-2 border-primary text-gray-900"
                        : "text-gray-500"
                    } cursor-pointer`}
                  >
                    Logo
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/3 px-3">
              <div className="flex flex-wrap -px-3">
                <div
                  onClick={() => {
                    setShowModal(true, <PortfolioContent />);
                  }}
                  className="w-full md:w-1/3 p-3 cursor-pointer"
                >
                  <Image
                    width={800}
                    height={800}
                    className="h-96 w-full object-cover rounded-lg"
                    src={header1}
                    alt=""
                  />
                </div>
                <div className="w-full md:w-2/3 p-3">
                  <Image
                    width={800}
                    height={800}
                    className="h-96 object-cover w-full rounded-lg"
                    src={header1}
                    alt=""
                  />
                </div>
                <div className="w-full md:w-2/3 p-3">
                  <Image
                    width={800}
                    height={800}
                    className="h-96 object-cover w-full rounded-lg"
                    src={header1}
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/3 p-3">
                  <Image
                    width={800}
                    height={800}
                    className="h-96 w-full object-cover rounded-lg"
                    src={header1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Loggy - Portfolio</title>
        <meta
          name="description"
          content="Explore Loggy's portfolio showcasing a creative web development agency specializing in product roadmapping, providing strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, portfolio, web development, creative agency, product roadmapping, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - Portfolio" />
        <meta
          property="og:description"
          content="Explore Loggy's portfolio showcasing a creative web development agency specializing in product roadmapping, providing strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Portfolio />;
    </>
  );
}
