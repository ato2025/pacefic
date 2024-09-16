import axios from "axios";

export const axiosLocal = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});
export const axiosServer = axios.create({
  baseURL: process.env.EXTERNAL_API_BASE_URL || 'http://46.21.250.175:9090'
});
