import Button from './Button';
import JobListContext from '../../context/JobListContext';
import { useContext } from 'react';

function Filter() {
	const { filter } = useContext(JobListContext);
	return (
		<div className="filter">
			{filter.map((item) => (
				<div className="active">
					<Button key={item} value="item">
						{item}
					</Button>
					<div key={item}>
						<img src="./assets/icon-remove.svg" alt="Remove" />
					</div>
				</div>
			))}
			<Button value="clear">Clear</Button>
		</div>
	);
}

export default Filter;
