import { useContext, useEffect } from 'react';
import JobListContext from '../../context/JobListContext';

function Button({ children, value, type }) {
	const { filterList, clearFilter, removeFilter } = useContext(JobListContext);
	const handleClick = () => {
		if (value === 'clear') {
			clearFilter();
			console.log(type);
		}
		if ((type === undefined) & (value != 'clear')) {
			removeFilter(value);
			console.log(value);
		}
		if (type != undefined && value != 'clear') {
			filterList(type, value);
		}
	};

	{
		return (
			<button className="btn" onClick={handleClick}>
				{children}
			</button>
		);
	}
}

export default Button;
