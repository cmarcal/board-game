import { useState, useEffect } from 'react';
import { userService } from '../../state/user';

export const useDataProfile = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const fetchProfile = () => {
		return userService.fetchProfile();
	};
	useEffect(() => {
		const subscription = fetchProfile().subscribe(() => setLoading(false));
		return () => subscription.unsubscribe();
	}, []);

	return { loading };
};
