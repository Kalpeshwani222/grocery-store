// src/api/axios.js
import axios from "axios";
import config from "configs/config";

const apiClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
