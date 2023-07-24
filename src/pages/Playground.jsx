import { useState, useCallback, useEffect, Suspense, lazy } from 'react';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';

const LazyEditor = lazy(() => import('../components/Editor'));
const LazyOutput = lazy(() => import('../components/Output'));

const Playground = () => {
	const [query, setQuery] = useState('Select * from Products;');
	const [history, setHistory] = useState([]);
	const [outputData, setOutputData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [showOutput, setShowOutput] = useState(false);

	const handleSubmit = useCallback(async () => {
		setIsLoading(true);
		let data;

		if (query.toLowerCase() === 'select * from products;') {
			data = await import('../assets/data/products.json');
		} else if (query.toLowerCase() === 'select * from customers;') {
			data = await import('../assets/data/customer.json');
		} else {
			data = await import('../assets/data/products.json');
		}

		setOutputData(data.default);
		setIsLoading(false);
		setShowOutput(true);
		setHistory([query, ...history]);
		localStorage.setItem(
			'history',
			JSON.stringify({ items: [query, ...history] })
		);
	}, [query]);

	return (
		<div className="flex flex-col max-h-full p-1 h-full">
			<div className="flex h-1/2">
				<div className="w-2/3 mr-2">
					<Suspense fallback={<Loading />}>
						<LazyEditor
							query={query}
							setQuery={setQuery}
							handleSubmit={handleSubmit}
							setOutputData={setOutputData}
							setShowOutput={setShowOutput}
						/>
					</Suspense>
				</div>
				<div className="w-1/2">
					<Sidebar
						history={history}
						setHistory={setHistory}
						setQuery={setQuery}
					/>
				</div>
			</div>
			<div className="flex-1">
				<Suspense fallback={<Loading />}>
					{showOutput && (
						<LazyOutput isLoading={isLoading} tableData={outputData} />
					)}
				</Suspense>
			</div>
		</div>
	);
};

export default Playground;
