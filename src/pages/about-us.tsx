import AboutUsHeader from "@/components/about-us/AboutUsHeader";
import FindingOut from "@/components/about-us/FindingOut";
import AccordionContainer from "@/components/about-us/accordion";
import LoopPrograms from "@/components/about-us/loopPrograms";
import MeetTheTeam from "@/components/about-us/team";
import Values from "@/components/about-us/values";

const AboutUs = () => {
  return (
    <>
      <AboutUsHeader />
      <FindingOut />
      <MeetTheTeam />
      <LoopPrograms />
      <AccordionContainer />
      <Values />
    </>
  );
};

export default AboutUs;
