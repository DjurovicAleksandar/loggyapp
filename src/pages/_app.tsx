import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import { useState } from "react";
import { navServices } from "@/components/navigation/NavServicesDb";

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <>
      <Nav onShowModal={setShowModal} showModal={showModal} />
      <Component {...pageProps} />
      <Footer />
      {showModal && (
        <div className="w-screen h-screen bg-gray-50 fixed inset-0">
          <ul className="px-14 py-[25vh] text-4xl flex flex-col gap-4 font-base">
            <li className=" hover:text-primary">
              <a href="#">Home</a>
            </li>
            <li
              className="group duration-300 ease-linear cursor-pointer"
              onClick={(e) => {
                setOpenServices(!openServices);
              }}
            >
              <span className="group-hover:text-primary ">
                <span className="mr-2">Services</span>
                {openServices ? <span>&#11105;</span> : <span>&#11107;</span>}
              </span>
            </li>
            {openServices && (
              <div className="flex flex-col gap-2">
                {navServices.map(({ serviceTitle, href }, i) => {
                  return (
                    <a
                      className="text-base font-light hover:text-primary"
                      href={href}
                      key={i}
                    >
                      {serviceTitle}
                    </a>
                  );
                })}
              </div>
            )}
            <li className=" hover:text-primary">
              <a href="#">About</a>
            </li>
            <li className=" hover:text-primary">
              <a href="#">Case studies</a>
            </li>
            <li className=" hover:text-primary">
              <a href="#">Blog</a>
            </li>

            <li className=" hover:text-primary">
              <a href="#">Get in touch</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
