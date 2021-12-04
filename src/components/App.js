import { FormControl, Input, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default function App() {
  const [query, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query})`)
      .then((res) => {
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(true);
      });
  });

  const mainPage = () => {
    const PressEnter = (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        search(e);
      }
    };

    const search = (e) => {
      setSearchQuery(e.target.value);
    };

    return (
      <FormControl display="flex" w="30rem" alignItems="center" m="2rem 0">
        <Image
          src="https://cdn-icons.flaticon.com/png/512/2839/premium/2839041.png?token=exp=1638593307~hmac=57ba513e314fef7d87a5ae52de985a2a"
          mr="1rem"
          boxSize="2.3rem"
        />
        <Input
          type="text"
          boxShadow="md"
          focusBorderColor="pink.200"
          bg="white"
          value={query}
          onChange={search}
          onKeyDown={PressEnter}
          placeholder="제목, 작가, 출판사를 입력해 보세요."
        />
      </FormControl>
    );
  };

  const handleCards = () => {
    const items = cards.map((item, i) => {
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
