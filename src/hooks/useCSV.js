import { axiosPrivate } from '../store/axios';
const fileDownload = require('js-file-download');

export const csvOptions = {
	COMPANY: '/company/csv',
	STUDENT: '/student/csv',
};

// get csvOption
const useCSV = option => {
	const getCSV = () => {
		axiosPrivate.get(option, { responseType: 'blob' }).then(
			result => {
				fileDownload(result.data, 'test.csv');
			},
			() => {
				console.log('failed to fetch data');
			}
		);
	};

	// TODO potential for isLoading
	return [getCSV];
};

export default useCSV;
