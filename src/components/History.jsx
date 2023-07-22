import React, { useCallback, memo } from 'react';

const History = ({ data, setQuery }) => {
	const handleClick = useCallback(
		(query) => {
			setQuery(query);
		},
		[setQuery]
	);

	if (data.length === 0) {
		return (
			<div className="flex justify-center mt-20 text-gray-400">
				<div>It's Empty Here</div>
			</div>
		);
	}

	return (
		<div className="p-4">
			<ul className="list-none text-sm">
				{data.map((query) => (
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

export default memo(History);
