import { type FC, ReactNode, useEffect } from "react";
import { useModal } from "./ModalContext";
import { useRouter } from "next/router";

interface ModalProps {
  content: ReactNode;
}

const Modal: FC<ModalProps> = ({ content }) => {
  const { setShowModal } = useModal();
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    // Accessing the data-id attribute value using dataset
    const clickedElement = event.target as HTMLElement;
    console.log(clickedElement.classList);

    if (clickedElement.classList[0] === "fixed") setShowModal(false, "");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowModal(false, null);
    }
  };

  const handleRouteChange = () => {
    setShowModal(false, "");
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div className="w-screen h-screen bg-gray-50/20 fixed inset-0 flex items-center justify-center z-20">
      {content}
    </div>
  );
};

export default Modal;
