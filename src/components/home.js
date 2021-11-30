import { Box, Text, Image, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

import useSearchBookData from "../hook/useSearchBookData";

export default function HomePage() {
  const [searchKeyword, setSearchKeyWord] = useState("");

  const { isLoading, isError, cards, setSearchQuery } = useSearchBookData("");

  const PressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      search();
    }
  };

  const handleChange = (e) => {
    setSearchKeyWord(e.target.value);
  };

  const search = (e) => {
    setSearchQuery(`${searchKeyword}`);
  };

  return (
    <div>
      <Box bg="#fdffe9" h="100%" w="100%">
        <Image src="https://cdn-icons.flaticon.com/png/512/3227/premium/3227053.png?token=exp=1636785046~hmac=7b713274cf885d473735ccfd4390261d" />
        <Text>Book Finder</Text>
        <Text>찾고 싶은 책을 검색해보세요!</Text>
        <Input
          type="text"
          value={searchKeyword}
          onChange={handleChange}
          onKeyDown={PressEnter}
          x
          placeholder="제목, 작가, 출판사를 입력해 보세요."
        />
        <Button onClick={search}>Search</Button>
      </Box>
      <div>{handleCards()}</div>
    </div>
  );
}
