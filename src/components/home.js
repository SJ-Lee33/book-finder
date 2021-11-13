import { Box, Text, Image, Input } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box bg="#fdffe9" h="100%" w="100%">
      <Image src="https://cdn-icons.flaticon.com/png/512/3227/premium/3227053.png?token=exp=1636785046~hmac=7b713274cf885d473735ccfd4390261d" />
      <Text>Book Finder</Text>
      <Text>찾고 싶은 책을 검색해보세요!</Text>
      <Input placeholder="제목, 작가, 출판사를 입력해 보세요." />
    </Box>
  );
}
