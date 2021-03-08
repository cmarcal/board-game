import { Query } from '@datorama/akita';
import { UserStore, UserState, userStore } from './store';

export class UserQuery extends Query<UserState> {
	protected store: UserStore;

	constructor(store: UserStore) {
		super(store);
		this.store = store;
	}

	selectUser = () => this.select((store) => store.user);
	getUser = () => this.getValue().user;
}

export const userQuery = new UserQuery(userStore);
