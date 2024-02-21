import Image from "next/image";
import { type FC } from "react";
import { useModal } from "../general/ModalContext";
import header1 from "@/assets/images/portfolio/web/gr8solutions.jpg.jpg";

interface PortfolioContentProps {}

const PortfolioContent: FC<PortfolioContentProps> = ({}) => {
  const { showModal, setShowModal } = useModal();
  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <Image
        width={800}
        height={800}
        className="object-cover rounded-lg w-[80%] h-auto"
        src={header1}
        alt=""
      />
      <button
        className="border-2 border-primary font-bold px-6 py-2 mt-2 rounded-md"
        onClick={() => setShowModal(false, "")}
      >
        Close
      </button>
    </div>
  );
};

export default PortfolioContent;
