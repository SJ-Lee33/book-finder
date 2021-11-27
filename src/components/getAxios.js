import axios from "axios";

export default function getAxios(inputData) {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=&{inputData}")
    .then((res) => {
      }
    });
}
