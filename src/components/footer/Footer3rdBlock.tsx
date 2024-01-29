import LogyyLogo from "@/assets/images/nav/logyy-logo.png";
import Image from "next/image";

const Footer3rdBlock = () => {
  return (
    <div className=" px-padXMobile py-padYMobile md:py-padY  md:px-padX flex items-end justify-between">
      {/* Logo */}
      <div>
        <Image src={LogyyLogo} width={100} height={100} alt="logyy-logo" />
        <p>
          Call us <a href="tel:0038765345241">0038765345241</a>
        </p>
      </div>
      {/* Review */}
      <div>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Terms of use</p>
      </div>
    </div>
  );
};

export default Footer3rdBlock;
