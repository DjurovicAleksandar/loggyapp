export default function ContactForm() {
  return (
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
        <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
      </div>
      <input
        type="submit"
        value="Send message"
        className="mt-4 bg-primary text-white font-semibold rounded-xl p-4"
      />
    </form>
  );
}
