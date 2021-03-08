import { UserDTO } from './../../service/profile/type';
export interface User {
	firstName: string;
	lastName: string;
	id: string;
	email: string;
	createdAt: string;
}

export const createUser = (payload: UserDTO): User => {
	const { id, firstName, lastName, email, createdAt } = payload;
	return {
		id,
		firstName,
		lastName: lastName || '',
		email,
		createdAt
	};
};
