import React from "react";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button/Button";
import { Table } from "../../Components/Table/Table";
import { useState } from "react";
import "./index.css";
import logo from "./SearchOverflow.png";
import { ModalButton } from "../../Components/ModalButton/ModalButton";
import { Modal } from "../../Components/Modal/Modal";
import { Filter } from "../../Components/Filter/Filter";
export const Context = React.createContext();

export const SearchPage = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const { control, handleSubmit } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [select, setSelect] = useState("activity");
  // activity votes creation relevance
  const onSubmit = (data) => {
    setSearchTitle(data.search);
  };
  return (
    <Context.Provider
      value={{
        setIsModalOpen,
        isModalOpen,
        select,
        setSelect,
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
        {searchTitle && <Table filter={select} searchTitle={searchTitle} />}
        <ModalButton />
        <Modal />
        <Filter />
      </div>
    </Context.Provider>
  );
};
