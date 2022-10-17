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
		if (!filter.includes(value)) {
			setFilter((current) => [...current, value]);
		}
	};
	const clearFilter = () => {
		setFilter([]);
		setJoblist(JobListData);
	};

	const removeFilter = (value) => {
		setFilter(filter.filter((filter) => filter != value));
		setJoblist(JobListData);
	};
	return (
		<JobListContext.Provider
			value={{
				joblist,
				setJoblist,
				filterList,
				filter,
				setFilter,
				clearFilter,
				removeFilter,
			}}
		>
			{children}
		</JobListContext.Provider>
	);
};

export default JobListContext;
