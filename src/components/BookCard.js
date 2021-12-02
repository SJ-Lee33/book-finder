import {
  Wrap,
  Box,
  Image,
  Text,
  Center,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";

const BookCard = ({
  id,
  thumbnail,
  title,
  authors,
  publisher,
  publishedDate,
}) => {
  return (
    <Link
      href={`http://play.google.com/store/books/details?id=${id}`}
      isExternal
      m="0.5rem"
      display="inline-block"
      _hover={{
        background: "white",
        color: "red.500",
        boxShadow: "xl",
        p: "0.5rem",
        rounded: "md",
        bg: "white",
      }}
    >
      <Center borderRadius="lg" w="25rem" m="1rem" bg="lightgrey">
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
        </Box>
      </Center>
    </Link>
  );
};

export default BookCard;
