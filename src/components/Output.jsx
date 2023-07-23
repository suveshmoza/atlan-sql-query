import Loading from './Loading';

const Output = ({ tableData, isLoading }) => {
	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			{tableData && (
				<div className="">
					<h1 className="text-xl p-2 bg-slate-100">Output</h1>
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
										<tr
											key={index}
											className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
										>
											{Object.values(item).map((value, index) => (
												<td
													key={index}
													className="p-2 border-b border-gray-300"
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
				</div>
			)}
		</div>
	);
};

export default Output;
