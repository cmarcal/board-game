import AxiosRx from './lib/axios-observable';

export const Api = AxiosRx.create({
	baseURL: 'https://teste',
	timeout: 10000
});

Api.interceptors.request.use((config) => {
	return config;
});
