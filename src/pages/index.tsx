import { type FC, useEffect } from "react";
import { useScroll } from "framer-motion";
import HomeServiceSection from "@/components/home/HomeServiceSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMarqueeSection from "@/components/home/HomeMarqueeSection";
import HomeDigitalPresenceSection from "@/components/home/HomeDigitalPresenceSection";
import HomeLaptopSection from "@/components/home/HomeLaptopSection";
import { getFirstPostPerCategory } from "@/components/utils/PostFetchFunctions";
import Head from "next/head";

interface HomeProps {
  posts: [];
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Loggy - The Creative Agency</title>
        <meta
          name="description"
          content="Discover Loggy, the creative web development agency, and explore our portfolio showcasing expertise in product roadmapping. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, creative agency, web development, portfolio, product roadmapping, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - The Creative Agency" />
        <meta
          property="og:description"
          content="Discover Loggy, the creative web development agency, and explore our portfolio showcasing expertise in product roadmapping. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={`w-full relative`}>
        <HomeHeader />
        <HomeMarqueeSection />
        <HomeDigitalPresenceSection />
        <HomeServiceSection />
        <HomeLaptopSection />
        <HomeBlogSection posts={posts} />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getFirstPostPerCategory();

  return {
    props: {
      posts,
    },
  };
}
