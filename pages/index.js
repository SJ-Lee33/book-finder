import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../src/components/home.js";
import Result from "../src/components/result.js";
import BookDetailInfo from "../src/components/bookDetailInfo.js";
import axios from "axios";

export default function Home() {
  return (
    // 링크연결 안하고 일단 페이지 구분 없이 모든 컴포넌트를 다 늘어놓았음
    <>
      <HomePage />
      <Result />
      <BookDetailInfo />
    </>
  );
}
