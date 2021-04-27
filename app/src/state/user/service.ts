import { createUser, User } from './types';
import { profileExternal } from './../../service/profile/get';
import { userStore, UserStore } from './store';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class UserService {
	private userStore: UserStore;
	constructor(userStore: UserStore) {
		this.userStore = userStore;
	}

	fetchProfile() {
		return profileExternal.profile().pipe(
			map((userProfile) => {
				return createUser(userProfile.data);
			}),
			tap((userProfile: User) => {
				this.userStore.update((oldUser) => {
					return {
						...oldUser,
						user: { email: oldUser.user.email, ...userProfile }
					};
				});
			}),
			catchError((err) => {
				return throwError(err);
			})
		);
	}

	resetStore() {
		this.userStore.reset();
	}
}

export const userService = new UserService(userStore);
