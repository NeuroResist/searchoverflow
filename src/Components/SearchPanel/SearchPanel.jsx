import "./SearchPanel.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { Button } from "../Button/Button";

export const SearchPanel = () => {
  return (
    <div className="search">
      <SearchInput />
      <Button />
    </div>
  );
};
