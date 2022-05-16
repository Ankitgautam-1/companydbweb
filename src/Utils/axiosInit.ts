import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://companiesdb.herokuapp.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accpet: "application/json",
  },
});

export default axiosConfig;
