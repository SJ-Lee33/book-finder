import { Stack, Box, Text, Button } from "@chakra-ui/react";

export default function BookDetailInfo() {
  return (
    <Stack direction={["column", "row"]} spacing="24px">
      {/* 책 정보 */}
      <Box bg="yellow">
        <Text>Escaping the Dar, Gray City</Text>
        <Box bg="gray" w="80%" h="300px">
          책표지
        </Box>
        <Text>작가</Text>
        <Text>출판사</Text>
        <Text>출판일</Text>
        <Text>페이지</Text>
      </Box>

      {/* 줄거리 */}
      <Box bg="yellow" w="500px">
        <Text>
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
          줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리
        </Text>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            eBook
          </Button>
          <Button colorScheme="teal" variant="solid">
            구매하기
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
