import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import { NextComponentType, NextPageContext } from "next";

import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";

import Modal from "@/components/general/Modal";
import { ModalProvider, useModal } from "@/components/general/ModalContext";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });

interface AppContentProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  router: any;
}

function AppContent({ Component, pageProps }: AppContentProps) {
  const { showModal, modalContent } = useModal();

  return (
    <div className={`${inter.className} `}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      {showModal && <Modal content={modalContent} />}
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ModalProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </ModalProvider>
  );
}
