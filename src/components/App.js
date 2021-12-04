import { FormControl, Input, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default function App() {
  const [query, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query})`
        );
        setCards(res.data.items);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [query]);

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      search(e);
    }
  };

  const search = (e) => {
    setSearchQuery(() => e.target.value);
  };

  if (loading) {
    <Text fontSize="2xl">Loading...</Text>;
  }

  if (error || !cards) {
    <Text fontSize="2xl">Error!</Text>;
  }

  return (
    <>
      <FormControl display="flex" w="30rem" alignItems="center" m="2rem 0">
        <Image src="/images/searching.png" mr="1rem" boxSize="2.3rem" />
        <Input
          type="text"
          boxShadow="md"
          focusBorderColor="pink.200"
          bg="white"
          value={query}
          onChange={search}
          onKeyDown={pressEnter}
          placeholder="제목, 작가, 출판사를 입력해 보세요."
        />
      </FormControl>
      {cards?.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        } else {
          thumbnail = "/images/noimage.jpg";
        }
        return (
          <div key={item.id}>
            <BookCard
              id={item.id}
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              publishedDate={item.volumeInfo.publishedDate}
              isEbook={item.saleInfo.isEbook}
            />
          </div>
        );
      })}
    </>
  );
}
