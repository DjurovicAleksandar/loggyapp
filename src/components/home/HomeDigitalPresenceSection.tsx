import SectionLayout from "@/components/general/SectionLayout";

export default function HomeDigitalPresenceSection() {
  return (
    <SectionLayout>
      <h2 className="font-thin text-center text-4xl md:text-6xl my-10">
        We&apos;ll craft{" "}
        <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
          the solution
        </span>{" "}
        to elevate
        <br /> your digital presence
      </h2>
      <p className="mt-10 text-center font-light text-xl md:w-1/2 md:mx-auto mb-40">
        We excel in crafting game-changing digital solutions. Whether its
        pioneering web development or pioneering app design, our focus is
        driving your brand towards success.
      </p>
    </SectionLayout>
  );
}
