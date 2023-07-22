import { useState, useCallback, useEffect } from 'react';
import { Editor, Output, Sidebar } from '../components';

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
		setHistory([...history, query]);
		localStorage.setItem(
			'history',
			JSON.stringify({ items: [...history, query] })
		);
	}, [query, history]);

	useEffect(() => {
		setShowOutput(false);
	}, []);

	return (
		<div className="flex flex-col max-h-full p-1 h-full">
			<div className="flex h-1/2">
				<div className="w-2/3 mr-2">
					<Editor
						query={query}
						setQuery={setQuery}
						handleSubmit={handleSubmit}
					/>
				</div>
				<div className="w-1/2 h-[300px] overflow-y-scroll">
					<Sidebar history={history} setQuery={setQuery} />
				</div>
			</div>
			<div className="flex-1">
				<div className="text-xl p-2 bg-slate-100">Output</div>
				<div className="h-[290px] overflow-scroll">
					{showOutput && (
						<Output isLoading={isLoading} tableData={outputData} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Playground;
