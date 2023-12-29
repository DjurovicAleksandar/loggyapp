export default function ContactCompanyInfo() {
  return (
    <div className="mt-20">
      <h3 className="mb-5">
        <strong>Company details</strong>
      </h3>
      <ul className="flex flex-col gap-4">
        <li className="font-semibold text-lg">Loggy</li>
        <li>
          St. Spasovdanska 47,
          <br /> 71123 East Sarajevo,
          <br /> Bosnia and Herzegovina
        </li>
        <li className="flex gap-2 group">
          Call us:
          <div>
            <a href="tel:0038765345241">0038765345241</a>
            <div className="h-[1px] w-[0rem] group-hover:w-[8rem] group-hover:bg-black duration-300 ease-linear"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
