const TableRow = ({ item, index }) => {
	return (
		<tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
			{Object.values(item).map((value, index) => (
				<td key={index} className="p-2 border-b border-gray-300">
					{value}
				</td>
			))}
		</tr>
	);
};
export default TableRow;
