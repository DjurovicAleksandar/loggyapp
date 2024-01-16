import React from "react";
import Image from "next/image";
import ProcessImg from "@/assets/images/home/header1.jpg";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";
import { accordionType } from "../about-us/accordion";

const accordionProcess: accordionType[] = [
  {
    id: 1,
    typography: "Planning Project",
    details:
      "In the planning phase, tasks, timelines, and resources are outlined in a project plan. Concurrently, decisions are made on the technology stack and development tools, setting the groundwork for efficient execution.",
  },
  {
    id: 2,
    typography: "Designing the Project",
    details:
      "In the design phase, wireframes or prototypes shape the website's layout, while the frontend's user interface (UI) and user experience (UX) design are crafted for an appealing and structured digital interface.",
  },
  {
    id: 3,
    typography: "Frontend Development",
    details:
      "In frontend development, the designed interface comes to life using HTML, CSS, and JavaScript. Additionally, frontend frameworks like React, Angular, or Vue.js are employed to construct interactive elements, enhancing user engagement.",
  },
  {
    id: 4,
    typography: "Backend Development",
    details:
      "In backend development, server-side logic is created using languages like Node.js, Python, or Java. Additionally, databases are set up and seamlessly integrated with the backend code for robust functionality.",
  },
  {
    id: 5,
    typography: "Testing",
    details:
      "In the testing phase, comprehensive testing, including unit, integration, and end-to-end testing, is conducted. Any identified bugs are addressed to ensure the proper functioning of the website or application.",
  },
];

const Process = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="flex flex-col w-[90%] md:w-[80%] items-center mx-auto">
        <div className="flex flex-col items-center w-full px-16 my-8">
          <h1 className="text-5xl text-center font-extrabold">
            See the{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Process
            </span>
          </h1>
          <p className="w-full md:w-[70%] mt-10 mb-20 text-center">
            The web development process involves several stages, from initial
            planning to deployment and maintenance.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
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
          <div className="hidden md:flex w-1/2">
            <Image src={ProcessImg} className="rounded-xl" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
