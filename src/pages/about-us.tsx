import AboutUsHeader from "@/components/about-us/AboutUsHeader";
import FindingOut from "@/components/about-us/FindingOut";
import AccordionContainer from "@/components/about-us/accordion";
import MeetTheTeam from "@/components/about-us/team";
import Values from "@/components/about-us/values";
import ServiceMarquee from "@/components/home/ServiceMarquee";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Loggy - About Us</title>
        <meta
          name="description"
          content="Discover Loggy, the creative web development agency, through our 'About Us' page. Explore our portfolio showcasing expertise in application development and learn how we provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, about us, creative agency, web development, portfolio, application development, strategic planning, guidance, digital products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - About Us" />
        <meta
          property="og:description"
          content="Discover Loggy, the creative web development agency, through our 'About Us' page. Explore our portfolio showcasing expertise in application development and learn how we provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AboutUsHeader />
      <FindingOut />
      <MeetTheTeam />
      <ServiceMarquee />
      <AccordionContainer />
      <Values />
    </>
  );
};

export default AboutUs;
