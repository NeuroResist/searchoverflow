import "./Modal.css";
import { Context } from "../../Pages/SearchPage";
import { useContext, useEffect } from "react";

export const Modal = () => {
  const { setIsModalOpen, isModalOpen } = useContext(Context);

  // let modal = document.querySelector(".myModal");
  // let openModal = document.querySelector(".openModal");
  // let close = document.querySelector(".close");

  // Когда пользователь нажимает на кнопку, открыть модалку
  // openModal.onclick = function () {
  //   modal.style.display = "block";
  // };
  //
  // const BtnClose = (e) => {
  //   e.currentTarget.classList.add("none");
  // };

  // window.onclick = function (event) {
  //   if (isModalOpen) toggleClass();
  // };
  const toggleClass = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleClassForBackground = (e) => {
    if (e.currentTarget === e.target) setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className={"modal myModal " + (isModalOpen ? "none" : "block")}
      onClick={(e) => toggleClassForBackground(e)}
    >
      <div className="modal-content">
        <h2 className="modal-header">######</h2>
        Тут таблица
        <button onClick={toggleClass} className="close">
          Закрыть
        </button>
      </div>
    </div>
  );
};
