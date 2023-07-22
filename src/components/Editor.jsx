import ReactCodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { useCallback, memo } from 'react';

const Editor = ({ query, setQuery, handleSubmit }) => {
	const handleChange = useCallback(
		(value) => {
			setQuery(value);
		},
		[setQuery]
	);

	return (
		<div className="">
			<div className="text-right py-1">
				<button
					className="btn px-4 py-2 rounded bg-blue-600 text-white"
					onClick={handleSubmit}
				>
					Run Query
				</button>
			</div>
			<ReactCodeMirror
				className="border"
				height="250px"
				extensions={[sql()]}
				value={query}
				onChange={handleChange}
			/>
		</div>
	);
};

export default memo(Editor);
