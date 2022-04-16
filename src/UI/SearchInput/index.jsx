export const SearchInput = (props) => {
  return <input {...props.control.register(props.name)} {...props} />;
};
