import { Box, Text, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
export default function HomePage() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=&{query}")
      .then((res) => {
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
          console.log(cards);
        }
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.response);
      });
  };
  const PressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleChange(e);
      handleSubmit();
      //alert("버튼 누름");
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Box bg="#fdffe9" h="100%" w="100%">
      <Image src="https://cdn-icons.flaticon.com/png/512/3227/premium/3227053.png?token=exp=1636785046~hmac=7b713274cf885d473735ccfd4390261d" />
      <Text>Book Finder</Text>
      <Text>찾고 싶은 책을 검색해보세요!</Text>
      <Input
        type="text"
        value={title}
        onKeyPress={PressEnter}
        onChange={handleChange}
        placeholder="제목, 작가, 출판사를 입력해 보세요."
      />
    </Box>
  );
}
