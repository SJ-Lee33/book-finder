import { Image, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
export default function Header() {
  return (
    <Wrap direction="column" align="center" w="100%">
      <Image
        src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg"
        w="100%"
        maxH="3xs"
        objectFit="cover"
      />
      <Heading
        size="lg"
        fontWeight="bold"
        color="orange.700"
        m="1rem"
        textShadow="1px 1px #718096"
      >
        찾고 싶은 책을 검색해 보세요!
      </Heading>
    </Wrap>
  );
}
