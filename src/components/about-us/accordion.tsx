import React, { Key } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMoreRounded } from "@mui/icons-material";

export type accordionType = {
  id: Key;
  typography: string;
  details: string;
};

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
      "Who is Your target audience, and what is Your unique selling proposition?",
    details:
      "Tell us about the audience You want to capture and the unique qualities that make Your business shine. Who are Your ideal customers, and what makes Your product or service irresistible to them? Unraveling these details helps us tailor our approach to effectively reach and engage Your target market.",
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
      "What is your preferred content management system (CMS) if any?",
    details:
      "Regarding content management, do you have a preferred Content Management System (CMS) in mind, or are you open to recommendations? Understanding your CMS preference, if any, helps us tailor our development approach to integrate seamlessly with your chosen platform or provide suitable suggestions based on your needs.",
  },
  {
    id: 6,
    typography: "Where is our team located?",
    details:
      "Our small agency is founded in Bosnia & Herzegovina, based in city of Sarajevo, 2023 ",
  },
];

const AccordionContainer = () => {
  return (
    <div className="w-full h-full py-[200px]">
      <div className="w-[80%] items-center justify-start mb-20 px-6 mx-auto">
        <h1 className="text-5xl font-extrabold ">
          Discover things that you are <br /> interested in with us.
        </h1>
      </div>
      {accordion.map((items) => (
        <div key={items.id} className="flex items-center justify-center w-full">
          <Accordion className="bg-white w-[90%] md:w-[80%] border-b p-6">
            <AccordionSummary
              expandIcon={<ExpandMoreRounded className="text-primary" />}
              aria-controls="panel1a-content"
              id="panel"
            >
              <Typography
                variant="h4"
                className="font-bold text-xl text-primary"
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

export default AccordionContainer;
