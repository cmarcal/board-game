import { Api } from './../httpClient';

export const profileExternal = {
	profile: () => {
		return Api.get('/profile');
	}
};
