import { useEffect, useState } from "react";
import { apiURL } from "../Helpers/constans";

export const useSearchRequest = (searchTitle) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          apiURL +
            "search?page=1&pagesize=10&order=desc&sort=activity&intitle=" +
            searchTitle +
            "&site=stackoverflow"
        );
        let data = await response.json();
        setData(data);
      } catch (e) {
        alert("Error");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchTitle]);

  return [data, isLoading];
};
