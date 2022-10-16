import Header from './layouts/Header';
import Main from './layouts/Main';
import { JobListProvider } from './context/JobListContext';

function App() {
	return (
		<JobListProvider>
			<Header />
			<Main />
		</JobListProvider>
	);
}

export default App;
