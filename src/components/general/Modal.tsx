import { type FC, ReactNode } from "react";

interface ModalProps {
  content: ReactNode;
}

const Modal: FC<ModalProps> = ({ content }) => {
  return (
    <div className="w-screen h-screen bg-gray-50/20 fixed inset-0 flex items-center justify-center">
      {content}
    </div>
  );
};

export default Modal;
