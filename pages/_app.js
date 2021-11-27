import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import HomePage from "../src/components/home.js";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
