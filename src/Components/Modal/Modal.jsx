import "./Modal.css";
import { useState } from "react";

export const Modal = () => {
  let modal = document.querySelector(".myModal");
  let openModal = document.querySelector(".openModal");
  let close = document.querySelector(".close");

  // Когда пользователь нажимает на кнопку, открыть модалку
  openModal.onclick = function () {
    modal.style.display = "block";
  };

  const BtnClose = (e) => {
    e.currentTarget.classList.add("none");
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.add("none");
    }
  };

  return (
    <div className="modal myModal">
      <div className="modal-content">
        <h2 className="modal-header">######</h2>
        Тут таблица
        <button className="close" onClick={BtnClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
