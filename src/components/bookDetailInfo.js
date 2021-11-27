import { Stack, Box, Text, Button, Image, Center } from "@chakra-ui/react";

export default function BookDetailInfo({ bookInfo }) {
  return (
    <Stack direction={["column", "row"]} spacing="24px">
      <Center display="inline" w="10rem">
        <Text fontSize="xl" mb="1rem">
          bookInfo.title
        </Text>
        <Box mt="0.3rem" mb="0.3rem">
          <Image
            src="http://books.google.com/books/content?id=nfCaDgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="thumnail"
          ></Image>
        </Box>
        <Stack direction="col" display="inline">
          <Text fontSize="sm">bookInfo.authors</Text>
          <Text fontSize="sm">bookInfo.publisher</Text>
          <Text fontSize="sm">bookInfo.publishedDate</Text>
          <Text fontSize="sm">bookInfo.pages</Text>
        </Stack>
      </Center>

      <Box w="400px">
        <Text m="1rem">
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
        </Text>
        <Stack direction="row" spacing={4} align="center" m="1rem">
          <Button colorScheme="purple" variant="outline" size="xs">
            eBook
          </Button>
          <Button colorScheme="blue" variant="outline" size="xs">
            구매하기
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
