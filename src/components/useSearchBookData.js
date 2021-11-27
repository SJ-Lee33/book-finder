import { useEffect, useState } from "react";
import axios from "axios";

function useSearchBookData(query) {
  const [searchQuery, setSearchQuery] = useState(query);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      console.log("query:" + searchQuery);

      try {
        const result = await axios(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [searchQuery]);

  return { isLoading, isError, data, setSearchQuery };
}

export default useSearchBookData;
