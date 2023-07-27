import { useCallback } from 'react';
import { ListGroup } from 'flowbite-react';

const listData = [
	'SELECT * FROM PRODUCTS;',
	'SELECT productID, supplierID, unitPrice FROM PRODUCTS;',
	'SELECT * FROM CUSTOMERS;',
	'SELECT customerID, companyName, country FROM CUSTOMERS;',
	'SELECT customerID, unitPrice FROM CUSTOMERS;',
];

const AvailableQueries = ({ setQuery }) => {
	const handleClick = useCallback(
		(query) => {
			setQuery(query);
		},
		[setQuery]
	);

	return (
		<div className="h-[200px] overflow-scroll ">
			<ListGroup>
				{listData.map((query, index) => (
					<ListGroup.Item key={index} onClick={() => handleClick(query)}>
						{query}
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default AvailableQueries;
