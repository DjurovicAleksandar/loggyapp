import FooterSocials from "@/components/footer/FooterSocials";
import LogyyLogo from "@/assets/images/nav/logyy-logo.png";
import Image from "next/image";

const Footer1stBlock = () => {
  return (
    <div className="border-[1px] border-gray-300 px-padXMobile md:px-padX block md:flex justify-between items-center ">
      <div className="hidden md:block">
        <Image src={LogyyLogo} width={150} height={150} alt="" />
      </div>
      <FooterSocials />
    </div>
  );
};

export default Footer1stBlock;
