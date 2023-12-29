import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import { useState } from "react";
import Modal from "@/components/general/Modal";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(false);

  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const handleShowModal = (show: boolean, content: React.ReactNode | null) => {
    setShowModal(show);
    setModalContent(content);
  };

  return (
    <div className={`${inter.className} `}>
      <Nav handleShowModal={handleShowModal} showModal={showModal} />
      <Component
        {...pageProps}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
      <Footer />
      {showModal && <Modal content={modalContent} />}
    </div>
  );
}
