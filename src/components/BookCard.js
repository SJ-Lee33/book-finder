import {
  Wrap,
  Box,
  Image,
  Text,
  Center,
  Stack,
  Button,
} from "@chakra-ui/react";

const BookCard = ({ thumbnail, title, authors, publisher, publishedDate }) => {
  return (
    <Wrap>
      <Center borderRadius="lg" w="25rem" bg="lightgrey">
        <Box>
          <Image h="100%" m="0.5rem" src={thumbnail} alt="thumnail"></Image>
        </Box>
        <Box display="inline-block" w="15rem" h="100%">
          <Stack
            direction="col"
            display="block"
            bg="white"
            p="1rem"
            m="0.7rem"
            boxShadow="md"
          >
            <Text fontSize="xl">『{title}』</Text>
            <Text fontSize="m">{authors}</Text>
            <Text fontSize="sm">{publisher}</Text>
            <Text fontSize="sm">{publishedDate}</Text>
          </Stack>
          <Stack direction="row" spacing="1rem" m="0.7rem">
            <Button colorScheme="pink" variant="outline" size="xs">
              더보기
            </Button>
            <Button colorScheme="teal" variant="outline" size="xs">
              구매하기
            </Button>
          </Stack>
        </Box>
      </Center>
    </Wrap>
  );
};

export default BookCard;
