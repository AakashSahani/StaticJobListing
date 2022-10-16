import { createContext, useState } from 'react';
import JobListData from '../data/JobListData';

const JobListContext = createContext();

export const JobListProvider = ({ children }) => {
	const [joblist, setJoblist] = useState(JobListData);

	const filterList = (type, value) => {
		const key = type;
		setJoblist(joblist.filter((job) => job[type] === value));
	};

	return (
		<JobListContext.Provider value={{ joblist, setJoblist, filterList }}>
			{children}
		</JobListContext.Provider>
	);
};

export default JobListContext;
