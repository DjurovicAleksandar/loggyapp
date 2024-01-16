import React from "react";
import { accordionType } from "../about-us/accordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";

const supportQuestions: accordionType[] = [
  {
    id: 1,
    typography: "What are Your primary business objectives and goals?",
    details:
      "What are You aiming to achieve with Your business, and what specific goals do You have in mind? Understanding Your overarching objectives helps us tailor our strategies to align with Your vision and drive measurable success.",
  },
  {
    id: 2,
    typography:
      "How are bug fixes handled, and what is the typical turnaround time?",
    details:
      "Bug fixes are promptly addressed through our support system. Critical issues aim for resolution within 24 to 48 hours, while less severe bugs may take a few days to a week. Our priority is swift resolution for uninterrupted functionality.",
  },
  {
    id: 3,
    typography: "How do you ensure the security of our website/application?",
    details:
      "We ensure your website/application's security through regular audits, timely patches, access controls, encryption, and continuous monitoring for vulnerabilities, staying updated on industry best practices.",
  },
  {
    id: 4,
    typography: "What area does your team specialize in?",
    details:
      "Our team specializes in various areas of web and app development, including frontend and backend technologies, UI/UX design, and database management. We have expertise in delivering tailored solutions to meet diverse project requirements.",
  },
  {
    id: 6,
    typography: "Where is our team located?",
    details:
      "Our small agency is founded in Bosnia & Herzegovina, based in city of Sarajevo, 2023 ",
  },
  {
    id: 6,
    typography:
      "Can you provide examples of successful support and maintenance for similar projects?",
    details:
      "Certainly, we have a track record of successfully supporting and maintaining projects similar to yours. For example, in recent e-commerce and CMS projects, we demonstrated effective bug resolution, proactive maintenance, and seamless scalability.",
  },
  {
    id: 7,
    typography:
      "Wondering about our availability to start your project immediately?",
    details:
      "As a boutique agency, our availability to start projects is contingent on the current workload. Feel free to reach out with details about your project, and we'll promptly check our schedule to provide you with an accurate timeframe for commencement. ",
  },
];

const SupportAccordion = () => {
  return (
    <div className="w-full h-full bg-bgColor py-[200px]">
      <div className="w-[80%] items-center justify-start mb-20 px-6 mx-auto">
        <h1 className="text-5xl text-center font-extrabold ">
          Do you still have <br /> a questions?
        </h1>
      </div>
      {supportQuestions.map((items) => (
        <div key={items.id} className="flex items-center justify-center w-full">
          <Accordion className="bg-white w-[80%] border-b p-6">
            <AccordionSummary
              expandIcon={<ExpandMoreRounded className="text-primary" />}
              aria-controls="panel1a-content"
              id="panel"
            >
              <Typography variant="h4" className="accordion-text text-primary">
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

export default SupportAccordion;
