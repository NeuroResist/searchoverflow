import "./TableHeader.css";

export const TableHeader = (props) => {
  return (
    <header className="table__header header">
      <div className="header__author">Автор вопроса:</div>
      <div className="header__theme">Тема:</div>
      <div className="header__count">Количество ответов:</div>
      <div className="header__tags">Теги:</div>
    </header>
  );
};
