import axios, { AxiosError, AxiosResponse } from "axios";

export const baseURL = "https://66e20e92c831c8811b571102.mockapi.io/";

interface ApiError {
  message: string;
}

// Create axios instance
const http = axios.create({
  baseURL: `${baseURL}api`,
  timeout: 10000,
});

// Add auth token to requests
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses
http.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (err: AxiosError<ApiError>) => {
    // Handle 401 unauthorized
    if (err.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }

    // Log error for debugging
    console.error(err.response?.data?.message || "API Error");

    return Promise.reject(err);
  }
);

export default http;
