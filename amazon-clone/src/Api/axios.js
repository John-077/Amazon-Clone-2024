import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-6dbde/us-central1/api",
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-awks.onrender.com",
});

export {axiosInstance}