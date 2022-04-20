import { useEffect, useState } from "react";
import { apiURL } from "../Helpers/constans";

export const useSearchRequestForAnswers = ({ id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          apiURL +
            "questions/" +
            id +
            "/answers?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQHbd2UL"
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
  }, [id]);

  return [data.items, isLoading];
};
