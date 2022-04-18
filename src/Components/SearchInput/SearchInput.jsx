import "./SearchInput.css";

export const SearchInput = (props) => {
  return (
    <input
      className="search__input"
      type="text"
      {...props.control.register(props.name)}
      {...props}
    />
  );
};
