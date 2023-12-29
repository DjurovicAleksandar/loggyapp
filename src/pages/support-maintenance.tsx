import React from "react";
import Button from "@/components/general/Button";
import TecnologiesSupporting from "@/components/support-maintenance/technologies-supporting";
import SupportAccordion from "@/components/support-maintenance/support-accordion";

const SupportMaintenance = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
        <div className="flex w-full items-center justify-center">
          <h1 className="md:text-6xl text-5xl text-center font-extrabold">
            Support & Maintenance
          </h1>
        </div>
        <div className=" my-14 w-full md:w-[55%]">
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, reiciendis quasi? Architecto necessitatibus
          </p>
        </div>
        <div className="mb-20">
          <Button text="Get in touch" />
        </div>
      </div>
      <TecnologiesSupporting />
      <SupportAccordion />
    </div>
  );
};

export default SupportMaintenance;
