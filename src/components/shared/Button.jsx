import { useContext } from 'react';
import JobListContext from '../../context/JobListContext';

function Button({ children, value, type }) {
	const { filterList } = useContext(JobListContext);
	const handleClick = () => {
		// if (type === undefined) {
		filterList(type, value);
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
