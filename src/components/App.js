import {
  FormControl,
  Flex,
  Box,
  Text,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default function App() {
  const [query, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query})`)
      .then((res) => {
        if (res.data.items.length > 0) {
          console.log(res.data);
          setCards(res.data.items);
          setLoading(false);
          console.log("cards:" + cards);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const mainPage = () => {
    const PressEnter = (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        search(e);
      }
    };

    const search = (e) => {
      handleSubmit();
      setSearchQuery(e.target.value);
      console.log("값:" + query);
    };

    return (
      <FormControl display="flex" w="30rem" alignItems="center" mt="1rem">
        <Input
          type="text"
          value={query}
          onChange={search}
          onKeyDown={PressEnter}
          placeholder="제목, 작가, 출판사를 입력해 보세요."
        />
        <Button ml="0.5rem" onClick={search}>
          Search
        </Button>
      </FormControl>
    );
  };

  const handleCards = () => {
    console.log(cards);
    const items = cards.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
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
          />
        </div>
      );
    });
    return (
      <div>
        <div>{items}</div>
      </div>
    );
  };

  return (
    <div>
      {mainPage()}
      {handleCards()}
    </div>
  );
}
