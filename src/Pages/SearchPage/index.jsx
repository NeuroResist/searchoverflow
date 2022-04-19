import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
  const [isTag, setIsTag] = useState("");
  const [isAuthor, setIsAuthor] = useState("");
  const [tagOrAuthor, setTagOrAuthor] = useState("");
  const [idOfQuestion, setIdOfQuestion] = useState();
  let isFirst = true;
  const onSubmit = (data) => {
    setSearchTitle(data.search);
  };
  // useEffect для замены tag author
  useEffect(() => {
    if (!isFirst) {
      setTagOrAuthor("tag");
      console.log(tagOrAuthor);
    }
  }, [isTag]);
  useEffect(() => {
    if (!isFirst) {
      setTagOrAuthor("author");
      console.log(tagOrAuthor);
    }
  }, [isAuthor]);
  isFirst = false;
  console.log("==================" + isAuthor);
  return (
    <Context.Provider
      value={{
        setIsModalOpen,
        isModalOpen,
        select,
        setSelect,
        isTag,
        setIsTag,
        isAuthor,
        setIsAuthor,
        tagOrAuthor,
        setTagOrAuthor,
        setIdOfQuestion,
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
        <Filter />
        {searchTitle && <Table filter={select} searchTitle={searchTitle} />}
        <ModalButton />
        {!isModalOpen && tagOrAuthor === "tag" && <Modal tag={isTag} />}
        {!isModalOpen && tagOrAuthor === "author" && (
          <Modal author={isAuthor} />
        )}
        <Link to="/71925126">Posts1</Link>
      </div>
    </Context.Provider>
  );
};
