import Image from "next/image";
import { serviceArray } from "@/data/NavServicesDb";

import HomeServiceCon from "./HomeServiceCon";

const excludedTitles = [
  "Product Roadmapping",
  "Support & Maintenance",
  "Application Development",
];

const HomeServiceSection = () => {
  return (
    <section className="mb-10">
      {serviceArray
        .filter((item) => !excludedTitles.includes(item.serviceTitle))
        .map(
          (
            {
              serviceTitle,
              serviceDescription,
              href,
              project1Img,
              project2Img,
              project1Href,
              project2Href,
            },
            i
          ) => {
            const directon = i % 2 === 0 ? "left" : "right";

            return (
              <HomeServiceCon
                key={i}
                serviceName={serviceTitle}
                serviceDescription={serviceDescription}
                serviceHref={href}
                project1Img={project1Img}
                project2Img={project2Img}
                project1Href={project1Href}
                project2Href={project2Href}
                direction={directon}
              />
            );
          }
        )}
    </section>
  );
};

export default HomeServiceSection;
