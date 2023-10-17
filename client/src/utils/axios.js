import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your server's URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default customAxios;
