import { createContext, useState } from 'react';
import JobListData from '../data/JobListData';

const JobListContext = createContext();

export const JobListProvider = ({ children }) => {
	const [joblist, setJoblist] = useState(JobListData);
	const [filter, setFilter] = useState([]);
	const filterList = (type, value) => {
		const key = type;
		setJoblist(joblist.filter((job) => job[type].includes(value)));
		const firstlist = joblist[0];
		console.log(filterList[type]);
		setFilter((current) => [...current, value]);
		console.log(filter);
	};

	return (
		<JobListContext.Provider
			value={{ joblist, setJoblist, filterList, filter, setFilter }}
		>
			{children}
		</JobListContext.Provider>
	);
};

export default JobListContext;
