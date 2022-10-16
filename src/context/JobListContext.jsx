import { createContext, useState } from 'react';
import JobListData from '../data/JobListData';

const JobListContext = createContext();

export const JobListProvider = ({ children }) => {
	const [joblist, setJoblist] = useState(JobListData);

	const sayHello = () => {
		console.log('Hello There');
		console.log(joblist);
	};
	return (
		<JobListContext.Provider value={{ joblist, setJoblist, sayHello }}>
			{children}
		</JobListContext.Provider>
	);
};

export default JobListContext;
