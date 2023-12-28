import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import { useState } from "react";
import Modal from "@/components/general/Modal";

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const handleShowModal = (show: boolean, content: React.ReactNode | null) => {
    setShowModal(show);
    setModalContent(content);
  };

  return (
    <>
      <Nav
        handleShowModal={handleShowModal}
        showModal={showModal}
        openServices={openServices}
        onOpenServices={setOpenServices}
      />
      <Component
        {...pageProps}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
      <Footer />
      {showModal && <Modal content={modalContent} />}
    </>
  );
}
