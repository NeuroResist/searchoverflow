import { useEffect, useState } from "react";
import { apiURL } from "../Helpers/constans";
import { useContext } from "react";
import { Context } from "../Pages/SearchPage";

export const useSearchRequest = ({ searchTitle, filter, tag, author }) => {
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
          console.log("222222222222222222222222222222222222222222");

          response = await fetch(
            apiURL +
              "tags/" +
              tag.slice(1) +
              "/faq?page=1&pagesize=10&site=stackoverflow"
          );
        } else if (author && tagOrAuthor === "author") {
          console.log("11111111111111111111111111111111111111111");
          response = await fetch(
            apiURL +
              "users/" +
              author +
              "/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow"
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
