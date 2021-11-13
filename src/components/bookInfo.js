import { Box, Text, Stack, Button } from "@chakra-ui/react";

export default function BookInfo() {
  return (
    <Box borderWidth="5px" borderRadius="lg" w="30%" display="inline-block">
      <Box bg="red" h="100%" display="inline-block">
        <Text>★책 표지 이미지★</Text>
      </Box>
      <Box display="inline-block">
        <Text>제목 </Text>
        <Text>작가</Text>
        <Text>출판사</Text>
        <Text>출판일</Text>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            더보기
          </Button>
          <Button colorScheme="teal" variant="solid">
            구매하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
