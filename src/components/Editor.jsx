import ReactCodeMirror from '@uiw/react-codemirror';
import { useCallback, memo } from 'react';
import { sql } from '@codemirror/lang-sql';

const Editor = ({ query, setQuery, handleSubmit }) => {
	const handleChange = useCallback((value) => {
		setQuery(value);
	}, []);

	return (
		<div>
			<div className="flex justify-end pb-1">
				<label
					htmlFor="file-input"
					className="btn px-4 py-2 mr-1 rounded bg-green-600 text-white"
				>
					<i class="fa-solid fa-file-import"></i> Import File
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
					<i className="fa-solid fa-eraser"></i> Clear Query
				</button>
				<button
					className="btn px-4 py-2 rounded bg-blue-600 text-white"
					onClick={handleSubmit}
				>
					<i className="fa-solid fa-play"></i> Run Query
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
