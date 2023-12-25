import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function getInTouch() {
  return (
    <main
      className={`${inter.className} w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}
    >
      <div className="lg:mb-[10rem]">
        <h1 className="font-bold text-4xl lg:text-8xl lg:w-4/5 mb-5">
          Hey there, don&apos;t hesitate to reach out!
        </h1>
        <p className="lg:text-3xl lg:w-4/5">
          Whether you have questions, exciting project ideas, or pesky technical
          hurdles, drop us a line. Our team is all ears and ready to help. We
          pride ourselves on being responsive, aiming to get back to you within
          just a few hours. Let&apos;s chat soon!
        </p>
      </div>
      <div className="w-full  lg:flex justify-between">
        <form className="mt-10 flex flex-col gap-4 lg:order-1 lg:w-[60%]">
          <input
            placeholder="Full name *"
            className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full"
            required
          />
          <input
            placeholder="Email *"
            className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full"
            required
          />
          <textarea
            placeholder="What's the primary concern we need to prioritize? *"
            className="rounded-lg px-4 py-8 bg-gray-50 w-full h-[15rem] resize-none"
          />
          <div className="flex gap-4">
            {" "}
            <input type="checkbox" id="agreeTerms" name="agreeTerms" />
            <label htmlFor="agreeTerms">
              I agree to the terms and conditions
            </label>
          </div>
          <input
            type="submit"
            value="Send message"
            className="mt-4 bg-primary text-white font-semibold rounded-xl p-4"
          />
        </form>
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
      </div>
    </main>
  );
}
