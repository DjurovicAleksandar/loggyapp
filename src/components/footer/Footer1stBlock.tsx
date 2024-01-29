import FooterSocials from "@/components/footer/FooterSocials";
import LogyyLogo from "@/assets/images/nav/logyy-logo.png";
import Image from "next/image";
import { type FC } from "react";

export interface Footer1stBlockProps {
  onHmcText: (value: string) => void;
}

const Footer1stBlock: FC<Footer1stBlockProps> = ({ onHmcText }) => {
  return (
    <div className="border-[1px] border-gray-300 px-padXMobile md:px-padX block md:flex justify-between items-center py-0">
      <div className="hidden md:block">
        <Image src={LogyyLogo} width={150} height={150} alt="" />
      </div>
      <FooterSocials onHmcText={onHmcText} />
    </div>
  );
};

export default Footer1stBlock;
