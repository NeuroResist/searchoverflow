import "./TableQuestion.css";
import { Context } from "../../Pages/SearchPage";
import { useContext } from "react";

export const TableQuestion = (props) => {
  const {
    setIsModalOpen,
    isModalOpen,
    isTag,
    setIsTag,
    isAuthor,
    setIsAuthor,
  } = useContext(Context);
  const setNewTag = (e) => {
    setIsTag(e.currentTarget.innerText);
    setIsModalOpen(!isModalOpen);
  };
  const setNewAuthor = (e) => {
    console.log("+++++++++++++++++" + props.id);
    setIsAuthor(props.id);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="table__question question">
      <div className="question__author" onClick={setNewAuthor}>
        {props.display_name}
      </div>
      <div className="question__theme">{props.title}</div>
      <div className="question__count">{props.answer_count}</div>
      <div className="question__tags">
        {props.tags.map((tag, i) => (
          <span key={i} onClick={setNewTag} className="question__tag">
            {"#" + tag}
          </span>
        ))}
      </div>
    </div>
  );
};
