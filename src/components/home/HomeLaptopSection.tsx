import Image from "next/image";

import SectionLayout from "@/components/general/SectionLayout";

import laptopSection from "@/assets/images/home/laptopSection.png";

export default function HomeLaptopSection() {
  return (
    <SectionLayout className="bg-gray-200">
      <h2 className="text-center text-3xl md:text-5xl mt-10 font-semibold uppercase">
        Craft with the planet&apos;s foremost software developers, utilizing
        cutting-edge hardware, sensors, and cloud platforms.
      </h2>
      <p className="text-center font-light my-10">
        Engineered by industry-leading software developers, our offerings span
        comprehensive services including Product Roadmapping for strategic
        planning, Website Development for tailored online presence, Headless
        eCommerce solutions for flexible storefronts, Application Development
        across platforms, expert UI/UX Design for engaging interfaces, and
        Support & Maintenance for continuous operational excellence.
      </p>
      <Image alt="Laptop" src={laptopSection} className="mx-auto w-[50rem]" />
    </SectionLayout>
  );
}
