import "./ModalButton.css";
import { Context } from "../../Pages/SearchPage";
import { useContext, useEffect } from "react";

export const ModalButton = () => {
  const { setIsModalOpen, isModalOpen } = useContext(Context);

  const toggleClass = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button onClick={toggleClass} className={isModalOpen ? "block" : "none"}>
      Modalka
    </button>
  );
};
