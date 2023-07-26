import { memo, useEffect } from 'react';
import { ListGroup, Button } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';

const History = ({ history, setQuery, setHistory }) => {
	useEffect(() => {
		const storedHistory = localStorage.getItem('history');
		if (storedHistory) {
			setHistory(JSON.parse(storedHistory).items);
		}
	}, []);

	const handleDeleteHistory = () => {
		if (window.confirm('Do you want to delete history permanently?')) {
			setHistory('');
			localStorage.removeItem('history');
		}
	};

	if (history.length === 0) {
		return (
			<div className="flex justify-center mt-20 text-gray-400">
				<div>It's Empty Here</div>
			</div>
		);
	}

	return (
		<>
			{history && (
				<div className="flex justify-end mb-1">
					<Button onClick={handleDeleteHistory} color="failure">
						Delete History <FaTrash className="ml-2 h-4 w-4" />
					</Button>
				</div>
			)}
			<ListGroup className="overflow-y-scroll h-[175px]">
				{history.map((query, index) => (
					<ListGroup.Item key={index} onClick={() => setQuery(query)}>
						{query}
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

export default memo(History);
