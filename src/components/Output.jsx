import { memo } from 'react';
import TableRow from './TableRow';
import Loading from './Loading';

const Output = memo(({ tableData, isLoading }) => {
	if (isLoading) {
		return <Loading />;
	}

	if (!tableData || tableData.length === 0) {
		return (
			<div className="flex justify-center mt-20 text-gray-400">
				<div>No data available</div>
			</div>
		);
	}

	return (
		<div>
			<div className="">
				<div className="flex justify-between items-center text-xl p-2 bg-slate-100">
					<h1>Output</h1>
					<h1 className="text-sm px-2 text-gray-700">
						Fetched {tableData.length} rows
					</h1>
				</div>
				<div className="h-[278px] overflow-scroll">
					<div className="px-1">
						<table className="table-auto w-full">
							<thead className="bg-blue-600 text-white">
								<tr>
									{Object.keys(tableData[0]).map((key) => (
										<th key={key} className="p-2 font-semibold">
											{key}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{tableData.map((item, index) => (
									<TableRow key={index} item={item} index={index} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Output;
