export const UITable = (props) => {
  return (
    <div className="table">
      <div className="table__author">{props.owner.display_name}</div>
      <div className="table__title">{props.title}</div>
      <div className="table__count">{props.answer_count}</div>
      <div className="table__tags">{props.owner.display_name}</div>
    </div>
  );
};
