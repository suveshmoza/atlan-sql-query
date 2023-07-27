import { useState, useCallback, Suspense, lazy } from 'react';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

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
		const toastId = 'unique_toast';
		let data;

		if (query.toLowerCase().includes('from products')) {
			data = await import('../assets/data/products.json');
		} else if (query.toLowerCase().includes('from customers;')) {
			data = await import('../assets/data/customer.json');
		} else {
			data = await import('../assets/data/products.json');
		}

		setOutputData(data.default);
		const existingToast = toast.isActive(toastId);
		toast.success(
			existingToast ? 'Query Successfully!' : 'Query Successfully!',
			{
				toastId,
			}
		);
		setIsLoading(false);
		setShowOutput(true);
		setHistory([query, ...history]);
		localStorage.setItem(
			'history',
			JSON.stringify({ items: [query, ...history] })
		);
	}, [query, history]);

	return (
		<div className="flex flex-col">
			<div className="flex flex-col-reverse sm:flex-row h-1/2">
				<div className="w-full sm:w-2/3 mr-2 mb-2 sm:mb-0">
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
				<div className="w-full sm:w-1/2 mb-2 sm:mb-0">
					<Sidebar
						history={history}
						setHistory={setHistory}
						setQuery={setQuery}
					/>
				</div>
			</div>
			<div className="h-96">
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
