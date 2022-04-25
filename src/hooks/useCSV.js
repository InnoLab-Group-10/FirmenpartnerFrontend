import { axiosPrivate } from '../store/axios';

export const csvOptions = {
	COMPANY: '/company/csv',
	STUDENT: '/student/csv',
};

// get csvOption
const useCSV = option => {
	const getCSV = () => {
		axiosPrivate.get(option).then(
			result => {
				const blob = new Blob([result.data.csv], { type: 'text/csv' });
				const link = URL.createObjectURL(blob);
				window.location = link;
				console.log(link);
				URL.revokeObjectURL(link);
			},
			() => {
				console.log('failed to fetch csv data');
			}
		);
	};

	// TODO potential for isLoading
	return [getCSV];
};

export default useCSV;
