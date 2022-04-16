import { SearchInput } from "../../UI/SearchInput";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import { Table } from "../../Components/Table";
import { useState } from "react";

export const SearchPage = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSearchTitle(data.search);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput control={control} name="search" />
        <Button>Найти</Button>
      </form>
      {searchTitle && <Table searchTitle={searchTitle}></Table>}
    </div>
  );
};
