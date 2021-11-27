import { Box, Text, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useSearchBookData from "./useSearchBookData";

export default function HomePage() {
  const [title, setTitle] = useState("");

  const { isLoading, isError, data, setSearchQuery } =
    useSearchBookData("initial value");

  const search = (e) => {
    //onsubmit이름 바꾸기
    e.preventDefault();
    useSearchBookData(title);
    //onsole.log("입력완료");
  };

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      //console.log("enter 누름");
      search(e);
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value); //title = setTitle
  };

  return (
    <Box onSubmit={search} bg="#fdffe9" h="100%" w="100%">
      <Image src="https://cdn-icons.flaticon.com/png/512/3227/premium/3227053.png?token=exp=1636785046~hmac=7b713274cf885d473735ccfd4390261d" />
      <Text>Book Finder</Text>
      <Text>찾고 싶은 책을 검색해보세요!</Text>
      <Input
        type="text"
        value={title}
        onKeyPress={pressEnter}
        onChange={handleChange}
        placeholder="제목, 작가, 출판사를 입력해 보세요."
      />
    </Box>
  );
}
//element form으로 바꿔주기
