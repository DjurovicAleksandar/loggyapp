const Footer4thBlock = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" px-padXMobile md:px-padX py-4 text-center  md:flex items-center justify-center">
      © 2023 - {year}
      <a href="#" className="mx-1">
        LOGGY
      </a>{" "}
      All Rights Reserved
    </div>
  );
};

export default Footer4thBlock;
