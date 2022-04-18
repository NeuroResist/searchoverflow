import React from "react";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button/Button";
import { Table } from "../../Components/Table/Table";
import { useState } from "react";
import "./index.css";
import logo from "./SearchOverflow.png";
import { ModalButton } from "../../Components/ModalButton/ModalButton";
export const Context = React.createContext();

export const SearchPage = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const { control, handleSubmit } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = (data) => {
    setSearchTitle(data.search);
  };

  return (
    <Context.Provider
      value={{
        setIsModalOpen,
      }}
    >
      <div className="container">
        <div className="searchOverflow">
          <img src={logo} alt="logo" />
        </div>
        <form className="search container" onSubmit={handleSubmit(onSubmit)}>
          <SearchInput control={control} name="search" />
          <Button />
        </form>
        {searchTitle && <Table searchTitle={searchTitle}></Table>}
        <ModalButton isOpen={isModalOpen} />
      </div>
    </Context.Provider>
  );
};
