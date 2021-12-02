import App from "../src/components/App.js";
import Header from "../src/components/header.js";
import { Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100%"
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
