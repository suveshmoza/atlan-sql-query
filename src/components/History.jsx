import { memo, useEffect } from 'react';

const History = ({ history, setQuery, setHistory }) => {
	useEffect(() => {
		// Load history from localStorage on component mount
		const storedHistory = localStorage.getItem('history');
		if (storedHistory) {
			setHistory(JSON.parse(storedHistory).items);
		}
	}, []);

	const handleDeleteHistory = () => {
		// Prompt user before deleting history
		if (window.confirm('Do you want to delete history permanently?')) {
			setHistory('');
			localStorage.removeItem('history');
		}
	};

	// Render empty state if history is empty
	if (history.length === 0) {
		return (
			<div className="flex justify-center mt-20 text-gray-400">
				<div>It's Empty Here</div>
			</div>
		);
	}

	return (
		<div className="overflow-scroll h-[250px] p-4">
			{history && (
				<div className="text-end mb-1">
					<button
						onClick={handleDeleteHistory}
						className="px-4 py-2 bg-red-600 text-white rounded"
					>
						<i className="fa-solid fa-trash"></i>
					</button>
				</div>
			)}
			<ul className="list-none text-sm">
				{history.map((query, index) => (
					<li
						key={index}
						className="p-2 mb-2 border rounded-md shadow-md bg-blue-100 text-blue-800 cursor-pointer"
						onClick={() => setQuery(query)}
					>
						{query}
					</li>
				))}
			</ul>
		</div>
	);
};

export default memo(History);
