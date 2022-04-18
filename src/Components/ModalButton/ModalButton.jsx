import "./ModalButton.css";
import { Context } from "../../Pages/SearchPage";
import { useContext } from "react";

export const ModalButton = (isOpen) => {
  const { setIsModalOpen } = useContext(Context);
  return (
    <button
      onClick={setIsModalOpen((prevCount) => !prevCount)}
      className="openModal"
    >
      Modalka
    </button>
  );
};
