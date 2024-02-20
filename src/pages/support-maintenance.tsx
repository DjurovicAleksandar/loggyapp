import React from "react";
import Button from "@/components/general/Button";
import TecnologiesSupporting from "@/components/support-maintenance/technologies-supporting";
import SupportAccordion from "@/components/support-maintenance/support-accordion";
import Head from "next/head";

const SupportMaintenance = () => {
  return (
    <>
      <Head>
        <title>Loggy - Support and Maintenance Services</title>
        <meta
          name="description"
          content="Loggy, a creative web development agency, provides top-notch support and maintenance services, ensuring the smooth operation and longevity of web spaces developed with expertise in UX/UI design."
        />
        <meta
          name="keywords"
          content="loggy, support and maintenance, web development, creative agency, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Loggy - Support and Maintenance Services"
        />
        <meta
          property="og:description"
          content="Loggy, a creative web development agency, provides top-notch support and maintenance services, ensuring the smooth operation and longevity of web spaces developed with expertise in UX/UI design."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-full bg-bgColor">
        <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
          <div className="flex w-full items-center justify-center">
            <h1 className="md:text-6xl text-5xl text-center font-extrabold">
              Support & Maintenance
            </h1>
          </div>
          <div className=" my-14 w-full md:w-[70%]">
            <p className="text-center">
              Services dedicated to ensuring the sustained excellence of your
              project. We provide ongoing assistance, timely updates, and
              proactive maintenance for a consistently reliable user experience.
            </p>
          </div>
          <div className="mb-20">
            <Button text="Contact us" />
          </div>
        </div>
        <TecnologiesSupporting />
        <SupportAccordion />
      </div>
    </>
  );
};

export default SupportMaintenance;
