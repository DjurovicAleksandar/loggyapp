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
    typography: "Graphic Design",
    details:
      "Creating visual content for print or digital media, including logos, posters, and marketing materials.",
  },
  {
    id: 2,
    typography: "Web Design",
    details:
      "Designing and arranging elements on websites for a visually appealing and functional user experience.",
  },
  {
    id: 3,
    typography: "Brand Design",
    details:
      "Crafting the visual identity and messaging for a brand, including logos, color schemes, and brand guidelines.",
  },
  {
    id: 4,
    typography: "UI/UX Design",
    details:
      "User Interface and User Experience design for enhancing the interaction and usability of digital products.",
  },
];

const OurJob = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="flex flex-col w-[90%] md:w-[80%] items-center mx-auto">
        <div className="flex flex-col md:items-start items-center w-full my-8">
          <h1 className="text-5xl text-center font-extrabold">
            See{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Our
            </span>{" "}
            Work
          </h1>
          <p className="w-full md:w-[70%] mt-10 mb-20 text-center md:text-left">
            These are just a few examples, and there are many more specialized
            areas within the diverse field of design.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:flex w-1/2">
            <Image className="rounded-xl" src={ProcessImg} alt="img" />
          </div>
          <div className="md:w-1/2 mx-10">
            {accordionProcess.map((accordion) => (
              <div
                className="flex items-center justify-center"
                key={accordion.id}
              >
                <Accordion className="bg-white border-b p-6">
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
