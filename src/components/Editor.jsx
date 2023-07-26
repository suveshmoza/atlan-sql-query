import { memo, useCallback } from 'react';
import { FaFileImport, FaEraser, FaPlay } from 'react-icons/fa';

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
		(e) => {
			setQuery(e.target.value);
		},
		[setQuery]
	);

	return (
		<div>
			<div class="flex justify-end gap-1 rounded-md shadow-sm" role="group">
				<label
					htmlFor="file-input"
					className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-yellow-300/90 text-white border border-gray-200 rounded cursor-pointer"
				>
					Import File <FaFileImport className="ml-2 h-4 w-4" />
				</label>
				<input
					id="file-input"
					className="hidden"
					type="file"
					onChange={(e) => handleFileImport(e, setOutputData, setShowOutput)}
				/>

				<button
					type="button"
					onClick={() => setQuery('')}
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border-gray-200 rounded cursor-pointer"
				>
					Clear Query <FaEraser className="ml-2 h-4 w-4" />
				</button>
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-200 rounded cursor-pointer"
					disabled={query.length === 0}
					onClick={handleSubmit}
				>
					Run Query <FaPlay className="ml-2 h-4 w-4" />
				</button>
			</div>
			<textarea
				id="message"
				class="block p-2.5 h-[259px] w-full text-sm bg-gray-50 rounded-lg border border-gray-200 resize-none"
				placeholder="Enter or select an available query"
				value={query}
				onChange={handleChange}
			></textarea>
		</div>
	);
};

export default memo(Editor);
