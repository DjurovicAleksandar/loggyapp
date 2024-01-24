import Image from "next/image";

import SectionLayout from "@/components/general/SectionLayout";

import people from "@/assets/7724.jpg";

export default function HomeLaptopSection() {
  return (
    <SectionLayout className="my-20">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 h-full">
          <h2 className="text-center text-2xl md:text-5xl font-semibold uppercase mt-20">
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
              Craft
            </span>{" "}
            <span className="text-str">with the planet&apos;s foremost </span>
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
              software developers,
            </span>
            <span className="text-str">utilizing cutting-edge </span>
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
              hardware,
            </span>{" "}
            <span className="text-str">sensors, and cloud </span>
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
              platforms.
            </span>
          </h2>
          <p className="text-center font-light mt-20">
            Engineered by industry-leading software developers, our offerings
            span comprehensive services including Product Roadmapping for
            strategic planning, Website Development for tailored online
            presence, Headless eCommerce solutions for flexible storefronts,
            Application Development across platforms, expert UI/UX Design for
            engaging interfaces, and Support & Maintenance for continuous
            operational excellence.
          </p>
          <Image alt="Laptop" src={people} className="my-10" />
        </div>
      </div>
    </SectionLayout>
  );
}
