import { memo, useState } from 'react';

const AccordionItem = ({ name, data, setQuery }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className="mb-4">
			<button
				className="flex justify-between items-center w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none focus:shadow-outline"
				onClick={toggleAccordion}
			>
				<span className="text-lg font-semibold">{name}</span>
				<span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
						></path>
					</svg>
				</span>
			</button>
			{isOpen && (
				<ul className="bg-gray-100 p-2 rounded-lg">
					{data.map((item, index) => (
						<li
							key={index}
							className="py-2 px-3 mb-1 bg-white rounded-lg shadow-md"
							onClickCapture={() => setQuery(`Select ${item} from ${name};`)}
						>
							{item} (<span className="capitalize">{typeof item}</span>)
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default memo(AccordionItem);
