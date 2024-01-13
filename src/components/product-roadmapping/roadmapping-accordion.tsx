import React from "react";
import { accordionType } from "../about-us/accordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";

const accordion: accordionType[] = [
  {
    id: 1,
    typography: "What are Your primary business objectives and goals?",
    details:
      "What are You aiming to achieve with Your business, and what specific goals do You have in mind? Understanding Your overarching objectives helps us tailor our strategies to align with Your vision and drive measurable success.",
  },
  {
    id: 2,
    typography:
      "How do we balance short-term goals with long-term vision in our roadmap?",
    details:
      "To effectively balance short-term goals with our long-term vision in our product roadmap, we employ a strategic approach that involves careful prioritization, iterative planning, and continuous alignment with our overarching business strategy.",
  },
  {
    id: 3,
    typography:
      "What specific actions or behaviors do you want users to take on your platform?",
    details:
      "Envision the user journey on Your platform. What specific actions or behaviors do You aim to inspire? Whether it's making a purchase, signing up, or exploring content, understanding Your desired user interactions guides us in crafting a user experience that aligns seamlessly with Your goals.",
  },
  {
    id: 4,
    typography: "What is your preferred timeline for project completion?",
    details:
      "Share your ideal schedule for project completion. By knowing your preferred timeline, we can synchronize our efforts to ensure timely delivery and meet your expectations efficiently. This insight helps us tailor our workflow to align with your specific timeframe.",
  },
  {
    id: 5,
    typography:
      "How do we capture and apply learnings from each development cycle?",
    details:
      "To systematically capture and apply learnings from each development cycle, we have implemented a comprehensive learning and feedback loop within our product development framework.",
  },
];

const RoadmapAccordion = () => {
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

export default RoadmapAccordion;
