import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
