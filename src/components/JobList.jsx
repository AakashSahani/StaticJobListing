import JobItem from './JobItem';
import JobListContext from '../context/JobListContext';
import { useContext } from 'react';

function JobList() {
	const { joblist, setJoblist, sayHello } = useContext(JobListContext);

	return (
		<ul>
			{joblist.map((job) => (
				<JobItem key={job.id} job={job} />
			))}
		</ul>
	);
}

export default JobList;
