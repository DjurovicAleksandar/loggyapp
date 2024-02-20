import ContactFormBlock from "@/components/get-in-touch/ContactFormBlock";
import ContactHeader from "@/components/get-in-touch/ContactHeader";
import Head from "next/head";

export default function getInTouch() {
  return (
    <>
      <Head>
        <title>Loggy - Get in Touch</title>
        <meta
          name="description"
          content="Connect with Loggy, the creative web development agency, and explore our portfolio showcasing expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, get in touch, creative agency, web development, headless ecommerce, portfolio, product roadmapping, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - Get in Touch" />
        <meta
          property="og:description"
          content="Connect with Loggy, the creative web development agency, and explore our portfolio showcasing expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main
        className={` w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}
      >
        <ContactHeader />
        <ContactFormBlock />
      </main>
    </>
  );
}
