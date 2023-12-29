import ContactFormBlock from "@/components/get-in-touch/ContactFormBlock";
import ContactHeader from "@/components/get-in-touch/ContactHeader";

export default function getInTouch() {
  return (
    <main className={` w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}>
      <ContactHeader />
      <ContactFormBlock />
    </main>
  );
}
