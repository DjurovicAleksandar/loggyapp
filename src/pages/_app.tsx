import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import { NextComponentType, NextPageContext } from "next";

import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";

import Modal from "@/components/general/Modal";
import { ModalProvider, useModal } from "@/components/general/ModalContext";
import { useRouter } from "next/router";
import { useScroll } from "framer-motion";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

interface AppContentProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  router: any;
}

function AppContent({ Component, pageProps }: AppContentProps) {
  const { showModal, modalContent } = useModal();
  const { scrollY } = useScroll();

  useEffect(() => {
    const section = document.getElementById("home-contact-section");

    const handleScroll = () => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = scrollY.get();

        const startColor = [238, 237, 240];
        const finalColor = [88, 78, 107];

        const maxScroll = sectionTop + sectionHeight;
        const scrollPercentage =
          (scrollPosition - sectionTop) / (maxScroll - sectionTop);

        const color = startColor.map((channel, index) => {
          const difference = finalColor[index] - channel;
          return Math.round(channel + difference * scrollPercentage);
        });

        const finalBackgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        section.style.backgroundColor = finalBackgroundColor;
      }
    };

    const unsubscribeScroll = scrollY.onChange(handleScroll);

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

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
