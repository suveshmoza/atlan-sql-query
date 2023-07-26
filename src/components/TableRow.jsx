import { Table } from 'flowbite-react';

const TableRow = ({ item, index }) => {
	return (
		<Table.Row
			key={index}
			className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
		>
			{Object.values(item).map((value, index) => (
				<Table.Cell key={index} className="p-2 border-b border-gray-300">
					{value}
				</Table.Cell>
			))}
		</Table.Row>
	);
};
export default TableRow;
