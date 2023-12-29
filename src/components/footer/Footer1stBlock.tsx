import FooterSocials from "@/components/footer/FooterSocials";

const Footer1stBlock = () => {
  return (
    <div className="border-[1px] border-gray-300 px-padXMobile md:px-padX block md:flex justify-between items-center ">
      <div className="hidden md:block">
        <p>LOGGY</p>
      </div>
      <FooterSocials />
    </div>
  );
};

export default Footer1stBlock;
