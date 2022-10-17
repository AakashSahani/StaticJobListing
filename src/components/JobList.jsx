import JobItem from './JobItem';
import JobListContext from '../context/JobListContext';
import Card from './shared/Card';
import { useContext } from 'react';

function JobList() {
	const { joblist } = useContext(JobListContext);

	return (
		<div>
			{joblist.map((job) => (
				<Card key={job.id}>
					<JobItem key={job.id} job={job} />
				</Card>
			))}
		</div>
	);
}

export default JobList;
