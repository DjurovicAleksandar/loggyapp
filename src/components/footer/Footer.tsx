import FooterSocials from "@/components/footer/FooterSocials";
import Footer2ndBlock from "@/components/footer/Footer2ndBlock";
import Footer3rdBlock from "./Footer3rdBlock";
import Footer4thBlock from "./Footer4thBlock";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* 1st */}
      <div className="border-[1px] border-gray-300 px-padXMobile md:px-padX block md:flex justify-between items-center ">
        {/* Logo */}
        <div className="hidden md:block">
          <p>LOGGY</p>
        </div>
        {/* Social network */}
        <FooterSocials />
      </div>
      <Footer2ndBlock />
      <Footer3rdBlock />
      <Footer4thBlock />
    </footer>
  );
};

export default Footer;
