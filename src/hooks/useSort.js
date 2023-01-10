import { useState } from 'react';

export const SORT_OPTIONS = {
	ALPHABET: 1,
	TIMESTAMP: 2,
	LENGTH: 3,
};

const useSort = () => {
	const [sortedArray, setSortedArray] = useState(null);

	const sortHandler = (array, name, type) => {
		switch (type) {
			case SORT_OPTIONS.ALPHABET:
				setSortedArray(array.sort((a, b) => a[name].localeCompare(b[name])));
				break;
			case SORT_OPTIONS.TIMESTAMP:
				setSortedArray(array.sort((a, b) => new Date(a[name]) - new Date(b[name])));
				break;
			case SORT_OPTIONS.LENGTH:
				setSortedArray(array.sort((a, b) => a[name].length - b[name].length));
				break;
			default:
				setSortedArray(null);
		}
	};

	const customSortHandler = (array, sortFunction) => {
		setSortedArray(array.sort(sortFunction));
	};

	return { sortedArray, setSortedArray, sortHandler, customSortHandler };
};

export default useSort;
