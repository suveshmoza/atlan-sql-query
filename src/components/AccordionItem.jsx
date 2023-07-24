import { memo, useState } from 'react';

const AccordionItem = ({ name, data, setQuery }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevState) => !prevState);
	};

	const handleItemClick = (item) => {
		const query = `Select ${item} from ${name};`;
		setQuery(query);
	};

	const accordionButtonClass =
		'flex justify-between items-center w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none focus:shadow-outline';
	const listItemClass =
		'py-2 px-3 mb-1 bg-white rounded-lg shadow-md cursor-pointer';

	return (
		<div className="mb-4">
			<button className={accordionButtonClass} onClick={toggleAccordion}>
				<span className="text-lg font-semibold">{name}</span>
				{isOpen ? (
					<i className="fa-solid fa-angle-up"></i>
				) : (
					<i className="fa-solid fa-angle-down"></i>
				)}
			</button>
			{isOpen && (
				<ul className="bg-gray-100 p-2 rounded-lg">
					{data.map((item) => (
						<li
							key={item}
							className={listItemClass}
							onClick={() => handleItemClick(item)}
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
