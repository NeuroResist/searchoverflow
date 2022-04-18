import "./TableQuestion.css";

export const TableQuestion = (props) => {
  return (
    <div className="table__question question">
      <div className="question__author">{props.display_name}</div>
      <div className="question__theme">{props.title}</div>
      <div className="question__count">{props.answer_count}</div>
      <div className="question__tags">
        {props.tags.map((tag) => (
          <span className="question__tag">{"#" + tag}</span>
        ))}
      </div>
    </div>
  );
};
