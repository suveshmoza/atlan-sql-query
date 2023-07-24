import { memo, useCallback } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';

const handleFileImport = (e, setOutputData, setShowOutput) => {
	const importedFile = e.target.files[0];
	if (importedFile) {
		const readFile = new FileReader();
		readFile.onload = (e) => {
			try {
				const parsedData = JSON.parse(e.target.result);
				setOutputData(parsedData);
				setShowOutput(true);
			} catch (err) {
				console.log(err);
			}
		};
		readFile.readAsText(importedFile);
	}
};

const Editor = ({
	query,
	setQuery,
	handleSubmit,
	setOutputData,
	setShowOutput,
}) => {
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
					<i className="fa-solid fa-file-import"></i> Import File
				</label>
				<input
					id="file-input"
					className="hidden"
					type="file"
					onChange={(e) => handleFileImport(e, setOutputData, setShowOutput)}
				/>
				<button
					className="btn px-4 py-2 mr-1 rounded bg-red-600 text-white"
					onClick={() => setQuery('')}
				>
					<i className="fa-solid fa-eraser"></i> Clear Query
				</button>
				<button
					className="btn px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-75"
					disabled={query.length === 0}
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
