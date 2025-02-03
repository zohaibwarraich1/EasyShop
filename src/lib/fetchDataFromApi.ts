import axios from "axios";

// Get the base URL from environment or default to localhost in development
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchData = {
  get: async (url: string, params = {}) => {
    try {
      const response = await axiosInstance.get(url, { params });
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  post: async (url: string, data = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },
};

export default fetchData;
