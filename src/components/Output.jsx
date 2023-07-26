import { memo } from 'react';
import { Table, Badge } from 'flowbite-react';
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
		<>
			<div className="flex justify-between items-center text-xl p-2 bg-slate-100">
				<h1>Output</h1>
				<Badge color="indigo" className="text-sm px-2">
					Fetched {tableData.length} rows
				</Badge>
			</div>
			<div className="h-[237px] overflow-scroll">
				<Table striped className="table-auto w-full">
					<Table.Head>
						{Object.keys(tableData[0]).map((key) => (
							<Table.HeadCell key={key} className="p-2 font-semibold">
								{key}
							</Table.HeadCell>
						))}
					</Table.Head>

					<Table.Body>
						{tableData.map((item, index) => (
							<TableRow key={index} item={item} index={index} />
						))}
					</Table.Body>
				</Table>
			</div>
		</>
	);
});

export default Output;
