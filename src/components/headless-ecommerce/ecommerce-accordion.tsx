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
    typography: "What Technologies Are Involved in Headless Ecommerce?",
    details:
      "Headless ecommerce utilizes technologies like Headless CMS, Ecommerce Platforms, Front-end Frameworks, APIs, Serverless Technologies, Static Site Generators, Cloud Services, and Jamstack Architecture Tools to create a flexible and customizable architecture, separating the front-end from the ecommerce backend.",
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
    typography: "How Will SEO be Affected by a Headless Approach?",
    details:
      "In headless ecommerce, SEO remains vital. By incorporating best practices like server-side rendering and meticulous metadata handling, the impact on SEO can be minimized or improved. Regular collaboration with developers and SEO specialists ensures ongoing optimization.",
  },
  {
    id: 4,
    typography: "What is your preferred timeline for project completion?",
    details:
      "Share your ideal schedule for project completion. By knowing your preferred timeline, we can synchronize our efforts to ensure timely delivery and meet your expectations efficiently. This insight helps us tailor our workflow to align with your specific timeframe.",
  },
  {
    id: 5,
    typography: "Is Headless Ecommerce More Expensive to Implement?",
    details:
      "While the upfront cost of headless ecommerce may be higher, the long-term advantages in terms of scalability and adaptability often justify the investment for businesses seeking flexibility and enhanced user experiences.",
  },
  {
    id: 6,
    typography: "How Will Headless Ecommerce Impact User Experience?",
    details:
      "Headless ecommerce significantly enhances user experience by providing flexibility and customization, enabling seamless and personalized interactions across different channels and devices through faster updates and improved performance.",
  },
];

const HeadlessAccordion = () => {
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

export default HeadlessAccordion;
