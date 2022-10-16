import JobItem from './JobItem';
import JobListContext from '../context/JobListContext';
import Card from './shared/Card';
import { useContext } from 'react';

function JobList() {
	const { joblist, setJoblist, sayHello } = useContext(JobListContext);

	return (
		<ul>
			{joblist.map((job) => (
				<Card key={job.id}>
					<JobItem key={job.id} job={job} />
				</Card>
			))}
		</ul>
	);
}

export default JobList;
