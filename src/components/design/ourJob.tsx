import React from "react";
import Image from "next/image";
import ProcessImg from "@/assets/images/home/header1.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";
import { accordionType } from "../about-us/accordion";

const accordionProcess: accordionType[] = [
  {
    id: 1,
    typography: "Can you start right away?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae vel vitae inventore. Mollitia quidem deserunt libero asperiores, eius dolore ullam aliquam assumenda quaerat adipisci ipsam, aliquid est reprehenderit.",
  },
  {
    id: 2,
    typography: "Can you start right away?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae vel vitae inventore. Mollitia quidem deserunt libero asperiores, eius dolore ullam aliquam assumenda quaerat adipisci ipsam, aliquid est reprehenderit.",
  },
  {
    id: 3,
    typography: "Can you start right away?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae vel vitae inventore. Mollitia quidem deserunt libero asperiores, eius dolore ullam aliquam assumenda quaerat adipisci ipsam, aliquid est reprehenderit.",
  },
  {
    id: 4,
    typography: "Can you start right away?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae vel vitae inventore. Mollitia quidem deserunt libero asperiores, eius dolore ullam aliquam assumenda quaerat adipisci ipsam, aliquid est reprehenderit.",
  },
];

const OurJob = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="flex flex-col w-[80%] items-center mx-auto">
        <div className="flex flex-col md:items-start items-center w-full md:px-16 my-8">
          <h1 className="text-5xl text-center font-extrabold">See Our Work</h1>
          <p className="w-full md:w-[50%] mt-10 mb-20 text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
            debitis fuga.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:flex  w-full mx-10">
            <Image className="rounded-xl" src={ProcessImg} alt="img" />
          </div>
          <div>
            {accordionProcess.map((accordion) => (
              <div
                className="flex items-center justify-center"
                key={accordion.id}
              >
                <Accordion className="bg-white w-[80%] border-b p-6">
                  <AccordionSummary
                    expandIcon={<ExpandMoreRounded className="text-primary" />}
                    aria-controls="panel1a-content"
                    id="panel"
                  >
                    <Typography
                      variant="h4"
                      className="capitalize font-bold text-xl text-primary"
                    >
                      {accordion.typography}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="flex p-5">
                    <Typography>{accordion.details}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJob;
