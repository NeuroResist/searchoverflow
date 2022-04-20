import { useEffect, useState } from "react";
import { apiURL } from "../Helpers/constans";
import { useContext } from "react";
import { Context } from "../Pages/SearchPage";

export const useSearchRequest = ({ searchTitle, filter, tag, author, id }) => {
  const { tagOrAuthor } = useContext(Context);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let response;
        if (filter) {
          response = await fetch(
            apiURL +
              "search?page=1&pagesize=10&order=desc&sort=" +
              filter +
              "&intitle=" +
              searchTitle +
              "&site=stackoverflow"
          );
        } else if (tag && tagOrAuthor === "tag") {
          response = await fetch(
            apiURL +
              "tags/" +
              tag.slice(1) +
              "/faq?page=1&pagesize=10&site=stackoverflow"
          );
        } else if (author && tagOrAuthor === "author") {
          response = await fetch(
            apiURL +
              "users/" +
              author +
              "/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow"
          );
        } else if (id) {
          //https://api.stackexchange.com/2.3/71925126

          response = await fetch(
            apiURL +
              "questions/" +
              id +
              "/answers?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQHbd2UL"
          );
        }
        let data = await response.json();
        setData(data);
      } catch (e) {
        alert("Error");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchTitle, filter]);

  return [data, isLoading];
};
