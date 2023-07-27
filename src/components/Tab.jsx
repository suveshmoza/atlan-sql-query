import React from 'react';
import { ImCross } from 'react-icons/im';
const Tab = ({ id, isActive, onClick, onClose }) => {
	const showDeleteButton = id !== 1;

	return (
		<li
			className={`border-x mr-[1px] border-t outline-none flex justify-center items-center px-4 py-2 rounded-t-md hover:text-gray-600 hover:border-gray-300  ${
				isActive ? 'active  border-blue-500 text-blue-600' : 'bg-gray-200/80'
			}`}
			onClick={() => onClick(id)}
		>
			<p>Tab {id}</p>
			<button
				className="p-1 text-gray-700 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
				onClick={() => onClose(id)}
				disabled={!showDeleteButton}
			>
				<ImCross className="w-3 h-3" />
			</button>
		</li>
	);
};

export default Tab;
