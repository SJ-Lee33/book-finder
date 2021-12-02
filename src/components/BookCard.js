import {
  Box,
  Image,
  Text,
  Center,
  Stack,
  Link,
  Container,
  Button,
} from "@chakra-ui/react";

const BookCard = ({
  id,
  thumbnail,
  title,
  authors,
  publisher,
  publishedDate,
  isEbook,
}) => {
  return (
    <Container
      maxW="xl"
      centerContent
      mt="1.5rem"
      p="0.5rem"
      _hover={{
        color: "#08088A",
        boxShadow: "xl",
        rounded: "xl",
        bg: "yellow.100",
      }}
    >
      <Center borderRadius="lg" m="1rem" bg="gray.200" boxShadow="md">
        <Link
          href={`https://books.google.co.kr/books?id=${id}`}
          isExternal
          display="flex"
          textAlign="center"
        >
          <Box h="13.5rem" w="9rem" m="1rem">
            <Image
              h="100%"
              w="100%"
              boxShadow="md"
              borderRadius="lg"
              src={thumbnail}
              alt="thumnail"
            ></Image>
          </Box>
        </Link>

        <Box display="inline-block" w="15rem" h="100%" m="1rem" ml="0">
          <Stack
            direction="col"
            display="block"
            bg="white"
            p="1rem"
            boxShadow="md"
            borderRadius="lg"
          >
            <Text fontSize="xl">『{title}』</Text>
            <Text fontSize="m">{authors}</Text>
            <Text fontSize="sm">{publisher}</Text>
            <Text fontSize="sm">{publishedDate}</Text>
          </Stack>

          {isEbook ? (
            <Link
              href={`http://play.google.com/store/books/details?id=${id}`}
              isExternal
            >
              <Button
                float="right"
                mt="1rem"
                color="white"
                bg="blue.300"
                boxShadow="md"
                _hover={{
                  bg: "blue.500",
                }}
              >
                eBook
              </Button>
            </Link>
          ) : null}
        </Box>
      </Center>
    </Container>
  );
};

export default BookCard;
