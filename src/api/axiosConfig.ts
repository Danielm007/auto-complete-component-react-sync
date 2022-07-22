import axios from "axios";

//Suposed to be used but assesment says no third party libraries so I decided to use fetch
export const apiEndpoint = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
