import { Box, Text, Stack, Button, Center, Image } from "@chakra-ui/react";

export default function BookInfo({ bookInfo }) {
  const search = (e) => {
    e.preventDefault();
    // 검색
  };

  return (
    <Center borderWidth="5px" borderRadius="lg" w="25rem">
      <Box bg="red" h="100%" m="0.5rem" display="inline-block">
        <Image
          src="http://books.google.com/books/content?id=nfCaDgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          alt="thumnail"
        ></Image>
      </Box>
      <Box display="inline-block" w="15rem" h="100%">
        <Stack
          direction="col"
          display="block"
          bg="white"
          p="1rem"
          m="0.7rem"
          boxShadow="md"
          onSubmit={search}
        >
          <Text fontSize="xl">[ bookInfo.title ]</Text>
          <Text fontSize="sm">bookInfo.authors</Text>
          <Text fontSize="sm">bookInfo.publisher</Text>
          <Text fontSize="sm">bookInfo.publishedDate</Text>
        </Stack>
        <Stack direction="row" spacing="1rem">
          <Button colorScheme="pink" variant="outline" size="xs">
            더보기
          </Button>
          <Button colorScheme="teal" variant="outline" size="xs">
            구매하기
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
