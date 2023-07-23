import React from 'react';

const Tab = ({ id, isActive, onClick, onClose }) => {
	const showDeleteButton = id !== 1;

	const activeTabStyles = 'bg-white border-blue-500';
	const inactiveTabStyles = 'bg-gray-100 border-gray-300 cursor-pointer';
	const activeButtonStyles = 'bg-white text-blue-500';
	const inactiveButtonStyles = 'text-gray-700';

	return (
		<div
			className={`flex items-center space-x-2 rounded-t-lg border-t-2 border-l-2 border-r-2 ${
				isActive ? activeTabStyles : inactiveTabStyles
			} transition-colors duration-300 ease-in-out`}
			onClick={() => onClick(id)}
		>
			<button
				className={`px-2 py-1 rounded-tl-lg ${
					isActive ? activeButtonStyles : inactiveButtonStyles
				} transition-colors duration-300 ease-in-out`}
			>
				Tab {id}
			</button>
			<button
				className={`p-2 rounded-tr-lg ${
					showDeleteButton
						? ''
						: 'disabled:opacity-50 disabled:cursor-not-allowed'
				} ${
					isActive ? activeButtonStyles : inactiveButtonStyles
				} transition-colors duration-300 ease-in-out`}
				onClick={() => onClose(id)}
				disabled={!showDeleteButton}
			>
				X
			</button>
		</div>
	);
};

export default Tab;
