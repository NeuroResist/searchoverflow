import "./Filter.css";
import { Context } from "../../Pages/SearchPage";
import { useContext } from "react";

export const Filter = () => {
  const { select, setSelect } = useContext(Context);

  const changeSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div className="select">
      <select value={select} onChange={changeSelect}>
        <option>activity</option>
        <option>votes</option>
        <option>creation</option>
        <option>relevance</option>
      </select>
      <div className="select_arrow" />
    </div>
  );
};
