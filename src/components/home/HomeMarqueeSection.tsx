import ServiceMarquee from "@/components/home/ServiceMarquee";

export default function HomeMarqueeSection() {
  return (
    <section className="w-full  py-padYMobile px-padXMobile  md:my-40">
      <h3 className="md:px-padX text-center my-20 lg:my-40 font-thin md:text-5xl">
        Our arsenal of cutting-edge technologies powers
        <span className="font-bold"> Loggy&apos;s solutions</span>, setting the
        pace for innovation.
      </h3>
      <ServiceMarquee />
    </section>
  );
}
