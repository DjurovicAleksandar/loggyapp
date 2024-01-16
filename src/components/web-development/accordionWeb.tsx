import React, { Key } from "react";
import { accordionType } from "../about-us/accordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";

const accordion: accordionType[] = [
  {
    id: 1,
    typography: "What area does your team specialize in?",
    details:
      "Our team specializes in various areas of web and app development, including frontend and backend technologies, UI/UX design, and database management. We have expertise in delivering tailored solutions to meet diverse project requirements.",
  },
  {
    id: 2,
    typography:
      "How do you handle project management and ensure timely delivery?",
    details:
      "We employ Agile methodology, detailed planning, regular communication, and collaborative tools for effective project management. Timely delivery is ensured through clear milestones, continuous monitoring, scalable resources, risk management, client involvement, and a focus on quality assurance.",
  },
  {
    id: 3,
    typography:
      "How do you select the technology stack for a specific project?",
    details:
      "We choose the technology stack based on the project's requirements, client preferences, and the type of project (e.g., website, web app, mobile app), ensuring alignment with goals and existing infrastructure.",
  },
  {
    id: 4,
    typography:
      "What is your preferred content management system (CMS) if any?",
    details:
      "Regarding content management, do you have a preferred Content Management System (CMS) in mind, or are you open to recommendations? Understanding your CMS preference, if any, helps us tailor our development approach to integrate seamlessly with your chosen platform or provide suitable suggestions based on your needs.",
  },
  {
    id: 5,
    typography: "What is your design and user experience philosophy?",
    details:
      "Our design and user experience philosophy revolves around creating intuitive and visually appealing interfaces. We prioritize user-centric design, ensuring a seamless and engaging experience that aligns with our clients' brand identity and enhances overall usability.",
  },
  {
    id: 6,
    typography:
      "Do you offer ongoing support and maintenance after the project is completed?",
    details:
      "We provide ongoing support and maintenance services after the completion of the project. Our team is committed to ensuring the continued functionality, security, and optimal performance of the developed website or application. We offer support packages that include regular updates, troubleshooting, and any necessary enhancements to meet evolving needs.",
  },
  {
    id: 7,
    typography:
      "Are SEO (Search Engine Optimization) services included in your offerings? ",
    details:
      "Certainly, our services encompass a comprehensive suite of SEO strategies. From content optimization to performance enhancements, we employ a holistic approach to boost your website's visibility and improve its ranking on search engines, ultimately driving organic traffic and enhancing user engagement.",
  },
];

const AccordionWeb = () => {
  return (
    <div className="w-full h-full bg-bgColor py-[200px]">
      <div className="w-[80%] items-center justify-start mb-20 px-6 mx-auto">
        <h1 className="text-5xl text-center font-extrabold ">
          Do you still have <br /> a questions?
        </h1>
      </div>
      {accordion.map((items) => (
        <div key={items.id} className="flex items-center justify-center w-full">
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
                {items.typography}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex p-5">
              <Typography>{items.details}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionWeb;
