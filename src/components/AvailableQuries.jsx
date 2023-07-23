import React, { useCallback, memo } from 'react';

const listData = [
	'SELECT * FROM PRODUCTS;',
	'SELECT productID, supplierID, unitPrice FROM PRODUCTS;',
	'SELECT * FROM CUSTOMERS;',
	'SELECT customerID, companyName, country FROM CUSTOMERS;',
	'SELECT customerID, unitPrice FROM CUSTOMERS;',
];

const AvailableQuries = ({ setQuery }) => {
	const handleClick = useCallback(
		(query) => {
			setQuery(query);
		},
		[setQuery]
	);

	return (
		<div className="h-[250px] overflow-scroll p-1">
			<ul className="list-none text-sm">
				{listData.map((query) => (
					<li
						key={query}
						className="p-2 mb-2 border rounded-md shadow-md bg-blue-100 text-blue-800"
						onClick={() => handleClick(query)}
					>
						{query}
					</li>
				))}
			</ul>
		</div>
	);
};

export default memo(AvailableQuries);