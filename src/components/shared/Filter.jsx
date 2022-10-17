import Button from './Button';
import JobListContext from '../../context/JobListContext';
import { useContext } from 'react';

function Filter() {
	const { filter } = useContext(JobListContext);

	if (filter.length === 0) {
		return <div></div>;
	}
	return (
		<div className="filter">
			{filter.map((item) => (
				<div className="active" key={item}>
					<Button value="item">{item}</Button>
					<Button value={item}>
						<img src="./assets/icon-remove.svg" alt="Remove" />
					</Button>
				</div>
			))}
			<Button value="clear">Clear</Button>
		</div>
	);
}

export default Filter;
