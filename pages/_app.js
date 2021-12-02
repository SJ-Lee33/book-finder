import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
