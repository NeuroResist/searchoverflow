import { SearchInput } from "../../UI/SearchInput/SearchInput";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import { Table } from "../../Components/Table/Table";
import { useState } from "react";
import "./index.css";
import logo from "./SearchOverflow.png";

export const SearchPage = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSearchTitle(data.search);
  };
  return (
    <div className="container">
      <div className="searchOverflow">
        <img src={logo} alt="logo" />
      </div>
      <form className="search container" onSubmit={handleSubmit(onSubmit)}>
        <SearchInput control={control} name="search" />
        <Button />
      </form>
      {searchTitle && <Table searchTitle={searchTitle}></Table>}
    </div>
  );
};
