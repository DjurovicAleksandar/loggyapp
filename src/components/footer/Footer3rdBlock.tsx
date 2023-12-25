const Footer3rdBlock = () => {
  return (
    <div className=" px-padXMobile py-padYMobile md:py-padY border-y-[1px] md:px-padX flex justify-between">
      {/* Logo */}
      <div>
        <p>LOGGY</p>
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
