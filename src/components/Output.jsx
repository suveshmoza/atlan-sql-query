import Loading from './Loading';

const Output = ({ tableData, isLoading, isOutputReady }) => {
	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="rounded-xl shadow-md overflow-hidden">
			<div className="p-2">
				<table className="table-fixed w-full">
					<thead className="bg-blue-500 text-white">
						<tr>
							{Object.keys(tableData[0]).map((key) => (
								<th key={key} className="px-6 py-4 font-semibold">
									{key}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableData.map((item, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
							>
								{Object.values(item).map((value, index) => (
									<td
										key={index}
										className="px-6 py-4 border-b border-gray-300"
									>
										{value}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Output;
