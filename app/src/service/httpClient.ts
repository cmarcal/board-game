import AxiosRx from './lib/axios-observable';

export const Api = AxiosRx.create({
	headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': '*/*' },
	baseURL: 'http://localhost:3001',
	timeout: 10000
});
Api.interceptors.request.use((config) => {
	return config;
});
