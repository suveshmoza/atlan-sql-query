const Tab = ({ id, isActive, onClick, onClose }) => {
	const showDeleteButton = id !== 1; // Hide delete button for the first tab

	return (
		<div
			className={`flex items-center space-x-2 rounded-t-lg border-t-2 border-l-2 border-r-2 ${
				isActive
					? 'bg-white border-blue-500 '
					: 'bg-gray-100 border-gray-300 cursor-pointer'
			} transition-colors duration-300 ease-in-out`}
			onClick={() => onClick(id)}
		>
			<button
				className={`px-2 py-1 rounded-tl-lg ${
					isActive ? 'bg-white text-blue-500' : 'text-gray-700'
				} transition-colors duration-300 ease-in-out`}
			>
				Tab {id}
			</button>
			<button
				className={`px-2 py-1 rounded-tr-lg ${
					showDeleteButton ? '' : 'disabled'
				} ${
					isActive ? 'bg-white text-blue-500' : 'text-gray-700'
				} transition-colors duration-300 ease-in-out`}
				onClick={() => onClose(id)}
			>
				X
			</button>
		</div>
	);
};
export default Tab;
