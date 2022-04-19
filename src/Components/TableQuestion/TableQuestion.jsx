import "./TableQuestion.css";
import { Context } from "../../Pages/SearchPage";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const TableQuestion = (props) => {
  const {
    setIsModalOpen,
    isModalOpen,
    setIsTag,
    setIsAuthor,
    setIdOfQuestion,
  } = useContext(Context);
  const setNewTag = (e) => {
    setIsTag(e.currentTarget.innerText);
    setIsModalOpen(!isModalOpen);
  };
  const setNewAuthor = () => {
    setIsAuthor(props.id);
    setIsModalOpen(!isModalOpen);
  };
  const setNewQuestion = () => {
    setIdOfQuestion(props.questionId);
  };
  return (
    <div className="table__question question">
      <div className="question__author" onClick={setNewAuthor}>
        {props.display_name}
      </div>
      <Link
        className="question__theme"
        onClick={setNewQuestion}
        to={"/" + props.questionId}
      >
        {props.title}
      </Link>
      <Link
        className="question__count"
        onClick={setNewQuestion}
        to={"/" + props.questionId}
      >
        {props.answer_count}
      </Link>
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
