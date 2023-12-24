import Image from "next/image";

import header1 from "@/assets/images/home/header1.jpg";
import SectionLayout from "@/components/general/SectionLayout";
import HomeServiceCon from "./HomeServiceCon";

const servicesArray = [
  {
    serviceName: "Product Roadmapping",
    serviceDescription:
      "You wouldn&apos;t build a house without a blueprint. Why would you build a headless store or custom software without a Product Roadmap? Get a detailed blueprint that outlines the most cost-effective and future-proofed approach to building your new product.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
  {
    serviceName: "Website Development",
    serviceDescription:
      "Leveraging modern Jamstack technologies like Next.js, Strapi, and Contentful. Secure a site that's easily managed, impresses visitors, and empowers your marketing team for agile movements.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
  {
    serviceName: "Headless eCommerce",
    serviceDescription:
      "Embracing headless architecture for a faster site, rapid development, and flexible front-end capabilities. The multitude of choices can be overwhelming. Let us guide you through options and implement the most suitable stack for your needs.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
  {
    serviceName: "Application Development",
    serviceDescription:
      "Bid farewell to cumbersome workarounds with a bespoke web app designed for your business. Together, we'll craft a product geared toward impacting your bottom line.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
  {
    serviceName: "UI/UX Design",
    serviceDescription:
      "Ensure your customers never question the professionalism behind the app they're using. Allow us to sculpt a refined, optimized experience that propels your service to unparalleled heights.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
  {
    serviceName: "Support & Maintenance",
    serviceDescription:
      "Gain access to on-demand fixes, enhancements, and routine software tune-ups. Explore our adaptable support and maintenance packages for your convenience.",
    serviceHref: "#",
    project1Img: header1,
    project1Href: "#",
    project2Img: header1,
    project2Href: "#",
  },
];

const HomeServiceSection = () => {
  return (
    <section className="mb-10">
      {servicesArray.map(
        (
          {
            serviceName,
            serviceDescription,
            serviceHref,
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
              serviceName={serviceName}
              serviceDescription={serviceDescription}
              serviceHref={serviceHref}
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
