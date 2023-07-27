import { useMemo } from 'react';
import { Accordion } from 'flowbite-react';

import AvailableTableItem from './AvailableTableItem';
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
		<Accordion>
			{tablesInfo.map((table) => (
				<Accordion.Panel key={table.name}>
					<Accordion.Title>{table.name}</Accordion.Title>
					<Accordion.Content className="p-2">
						<AvailableTableItem
							name={table.name}
							data={table.data}
							setQuery={setQuery}
						/>
					</Accordion.Content>
				</Accordion.Panel>
			))}
		</Accordion>
	);
};

export default AvailableTables;
