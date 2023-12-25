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
  {
    id: 5,
    typography: "Can you start right away?",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae vel vitae inventore. Mollitia quidem deserunt libero asperiores, eius dolore ullam aliquam assumenda quaerat adipisci ipsam, aliquid est reprehenderit.",
  },
];

const AccordionContainer = () => {
  return (
    <div className="w-full h-full bg-bgColor py-[200px]">
      <div className="w-[80%] items-center justify-start mb-20 px-6 mx-auto">
        <h1 className="text-5xl font-extrabold ">
          Discover things that you are <br /> interested in with us.
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

export default AccordionContainer;
