import axios, { Axios } from "axios";

const startAxios: (baseURL: string) => Axios = (baseURL) => {
  const axiosInstance = axios.create({
    baseURL
  });
  return axiosInstance;
};

export const apiAxios = startAxios('https://ghorde-api.kodski.com/webclient/');