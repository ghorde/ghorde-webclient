import axios, { Axios } from 'axios';

const startAxios: (baseURL: string) => Axios = (baseURL) => {
	const axiosInstance = axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return axiosInstance;
};

export const apiAxios = startAxios('http://localhost:5050/webclient/');