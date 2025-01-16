import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
