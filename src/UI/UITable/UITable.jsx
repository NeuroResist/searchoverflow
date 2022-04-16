import "./UITable.css";

export const UITable = (props) => {
  return (
    <div className="table">
      <div className="table__author">{props.display_name}</div>
      <div className="table__title">{props.title}</div>
      <div className="table__count">{props.answer_count}</div>
      <div className="table__tags">
        {props.tags.map((tag) => (
          <span>{tag}__</span>
        ))}
      </div>
    </div>
  );
};
