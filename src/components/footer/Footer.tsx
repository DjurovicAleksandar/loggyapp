import Footer2ndBlock from "@/components/footer/Footer2ndBlock";
import Footer3rdBlock from "./Footer3rdBlock";
import Footer4thBlock from "./Footer4thBlock";
import Footer1stBlock from "./Footer1stBlock";
import HomeContactSection from "../home/HomeContactSection";
import { useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const [hmcText, setHmcText] = useState("");

  return (
    <>
      <HomeContactSection hmcText={hmcText} id="home-contact-section" />
      <footer className="bg-gray-100 w-full">
        <Footer1stBlock onHmcText={setHmcText} />
        <Footer2ndBlock />
        <Footer3rdBlock />
        <Footer4thBlock />
      </footer>
    </>
  );
};

export default Footer;
