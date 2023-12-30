import React, { createContext, useState, useContext } from "react";

export interface ModalContextType {
  showModal: boolean;
  modalContent: React.ReactNode | null;
  setShowModal: (show: boolean, content: React.ReactNode | null) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const handleShowModal = (show: boolean, content: React.ReactNode | null) => {
    setShowModal(show);
    setModalContent(content);
  };

  const modalContextValue: ModalContextType = {
    showModal,
    modalContent,
    setShowModal: handleShowModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// export default function ModalContext1({ Component, pageProps }: AppProps) {
//   const [showModal, setShowModal] = useState(false);

//   const [modalContent, setModalContent] = useState<React.ReactNode | null>(
//     null
//   );

//   const handleShowModal = (show: boolean, content: React.ReactNode | null) => {
//     setShowModal(show);
//     setModalContent(content);
//   };

//   return (
//     <div className={``}>
//       <Nav handleShowModal={handleShowModal} showModal={showModal} />
//       <Component
//         {...pageProps}
//         showModal={showModal}
//         handleShowModal={handleShowModal}
//       />
//       <Footer />
//       {showModal && <Modal content={modalContent} />}
//     </div>
//   );
// }
