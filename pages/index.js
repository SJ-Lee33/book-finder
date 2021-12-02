import App from "../src/components/App.js";
import Header from "../src/components/header.js";
import { Image, Flex, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <Flex
      w="100vw"
      direction="column"
      align="center"
      pos="relative"
      bg="#fdffe9"
    >
      <Header />
      <App />
    </Flex>
  );
}
