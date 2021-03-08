import { Api } from './../httpClient';
import { map } from 'rxjs/operators';

export const profileExternal = {
	profile: () => {
		return Api.get('/url');
	}
};
