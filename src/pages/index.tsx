import { type FC, useEffect } from "react";
import { useScroll, useAnimation } from "framer-motion";
import HomeServiceSection from "@/components/home/HomeServiceSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMarqueeSection from "@/components/home/HomeMarqueeSection";
import HomeDigitalPresenceSection from "@/components/home/HomeDigitalPresenceSection";
import HomeLaptopSection from "@/components/home/HomeLaptopSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import { getAllPosts } from "./api/postFetch";

interface HomeProps {
  posts: [];
}

const Home: FC<HomeProps> = ({ posts }) => {
  const { scrollY } = useScroll();

  useEffect(() => {
    const section = document.getElementById("home-contact-section");

    const handleScroll = () => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = scrollY.get();

        const startColor = [167, 139, 250];
        const finalColor = [46, 16, 101];

        const maxScroll = sectionTop + sectionHeight;
        const scrollPercentage =
          (scrollPosition - sectionTop) / (maxScroll - sectionTop);

        const color = startColor.map((channel, index) => {
          const difference = finalColor[index] - channel;
          return Math.round(channel + difference * scrollPercentage);
        });

        const finalBackgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        section.style.backgroundColor = finalBackgroundColor;
      }
    };

    const unsubscribeScroll = scrollY.onChange(handleScroll);

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <main className={`w-full relative`}>
      <HomeHeader />
      <HomeMarqueeSection />
      <HomeDigitalPresenceSection />
      <HomeServiceSection />

      <HomeLaptopSection />
      <HomeBlogSection posts={posts} />
      <HomeContactSection id="home-contact-section" />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
