import { useEffect, useState } from "react";
import axios from "axios";

function useSearchBookData(query) {
  const [searchQuery, setSearchQuery] = useState(query);

  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      setIsError(false);
      setIsLoading(true);
      console.log("query:" + searchQuery);

      try {
        const result = await axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery})`)
          .then((result) => {
            if (result.data.items.length > 0) {
              setCards(result.data.items);
              console.log(result.data);
              setIsLoading(false);
            }
          });
      } catch (error) {
        setIsError(true);
      }
    };
    fetchCards();
  }, [searchQuery]);

  return { isLoading, isError, cards, setSearchQuery };
}

export default useSearchBookData;
