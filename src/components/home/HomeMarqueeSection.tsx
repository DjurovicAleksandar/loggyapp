import ServiceMarquee from "@/components/home/ServiceMarquee";

export default function HomeMarqueeSection() {
  return (
    <section className="w-full  lg:mt-[20rem]">
      <div>
        <h3 className="py-padYMobile px-padXMobile  text-center my-20 lg:my-32 font-thin text-2xl md:text-5xl">
          Our arsenal of cutting-edge technologies powers
          <span className="font-bold bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
            {" "}
            Loggy&apos;s solutions
          </span>
          , setting the pace for innovation.
        </h3>
      </div>
      <ServiceMarquee />
    </section>
  );
}
