import { Store, StoreConfig } from '@datorama/akita';
import { User } from './types';

export interface UserState {
	user: User;
}

export function createInitialState(): UserState {
	return {
		user: {
			firstName: '',
			lastName: '',
			email: '',
			id: ''
		}
	};
}

@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {
	constructor() {
		super(createInitialState());
	}
}
export const userStore = new UserStore();
