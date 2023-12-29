import AboutUsHeader from "@/components/about-us/AboutUsHeader";
import FindingOut from "@/components/about-us/FindingOut";
import AccordionContainer from "@/components/about-us/accordion";
import MeetTheTeam from "@/components/about-us/team";
import Values from "@/components/about-us/values";
import ServiceMarquee from "@/components/home/ServiceMarquee";

const AboutUs = () => {
  return (
    <>
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
