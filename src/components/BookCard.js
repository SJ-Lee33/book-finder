import { Wrap, Box, Image, Text } from "@chakra-ui/react";

const BookCard = ({ thumbnail, title, authors, publisher, publishedDate }) => {
  return (
    <Wrap>
      <Box bg="lightgrey">
        <Image src={thumbnail}></Image>
        <Text>제목 : {title}</Text>
        <Text>작가 : {authors}</Text>
        <Text>출판사 : {publisher}</Text>
        <Text>출판일 : {publishedDate}</Text>
      </Box>
    </Wrap>
  );
};

export default BookCard;
