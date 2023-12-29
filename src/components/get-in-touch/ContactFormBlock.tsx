import ContactForm from "./ContactForm";
import ContactCompanyInfo from "./ContactCompanyInfo";

export default function ContactFormBlock() {
  return (
    <div className="w-full  lg:flex justify-between">
      <ContactForm />
      <ContactCompanyInfo />
    </div>
  );
}
