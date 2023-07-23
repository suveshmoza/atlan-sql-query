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
		<div>
			<div className="flex justify-end pb-1">
				<label
					htmlFor="file-input"
					className="btn px-4 py-2 mr-1 rounded bg-green-600 text-white"
				>
					Import File
				</label>
				<input
					id="file-input"
					className="hidden"
					type="file"
					// onChange={(e) => handleFileImport(e)}
				/>
				<button
					className="btn px-4 py-2 mr-1 rounded bg-red-600 text-white"
					onClick={() => setQuery('')}
				>
					Clear Query
				</button>
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
