import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-bgColor">
        <Nav />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
