import "./Modal.css";
import { Context } from "../../Pages/SearchPage";
import { useContext } from "react";
import { Table } from "../Table/Table";

export const Modal = ({ tag, author }) => {
  const { setIsModalOpen, isModalOpen, tagOrAuthor } = useContext(Context);
  console.log("_______" + author);
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
        {tag && tagOrAuthor === "tag" && (
          <>
            <h2 className="modal-header">
              Часто задаваемые вопросы по тегу {tag}
            </h2>
            <Table tag={tag} />
          </>
        )}
        {author && tagOrAuthor === "author" && (
          <>
            <h2 className="modal-header">
              Популярные вопросы аккаунта - {author}
            </h2>
            <Table author={author} />
          </>
        )}
        <button onClick={toggleClass} className="close">
          Закрыть
        </button>
      </div>
    </div>
  );
};
