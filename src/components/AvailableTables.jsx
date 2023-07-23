import React, { memo, useMemo } from 'react';
import AccordionItem from './AccordionItem';
import customerData from '../assets/data/customer.json';
import productsData from '../assets/data/products.json';

const AvailableTables = ({ setQuery }) => {
	const tablesInfo = useMemo(() => {
		return [
			{ name: 'Customer', data: Object.keys(customerData[0]) },
			{ name: 'Products', data: Object.keys(productsData[0]) },
		];
	}, []);

	return (
		<div className="overflow-scroll h-[250px] p-4">
			{tablesInfo.map((table, index) => (
				<AccordionItem
					key={index}
					name={table.name}
					data={table.data}
					setQuery={setQuery}
				/>
			))}
		</div>
	);
};

export default memo(AvailableTables);
