import HomeServiceSection from "@/components/home/HomeServiceSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMarqueeSection from "@/components/home/HomeMarqueeSection";
import HomeDigitalPresenceSection from "@/components/home/HomeDigitalPresenceSection";
import HomeLaptopSection from "@/components/home/HomeLaptopSection";
import HomeContactSection from "@/components/home/HomeContactSection";

export default function Home() {
  return (
    <main className={`w-full`}>
      <HomeHeader />
      <HomeMarqueeSection />
      <HomeDigitalPresenceSection />
      <HomeServiceSection />
      <HomeLaptopSection />
      <HomeBlogSection />
      <HomeContactSection />
    </main>
  );
}
