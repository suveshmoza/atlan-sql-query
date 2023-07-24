import { useState, memo } from 'react';
import History from './History';
import AvailableQuries from './AvailableQuries';
import AvailableTables from './AvailableTables';

const Sidebar = ({ history, setQuery, setHistory }) => {
	const [activeTab, setActiveTab] = useState('Suggestions');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const tabs = ['Suggestions', 'Tables Available', 'History'];

	return (
		<div className="h-[300px] border rounded-lg p-2">
			<ul className="flex justify-evenly">
				{tabs.map((label) => (
					<li
						key={label}
						onClick={() => handleTabClick(label)}
						className={`text-base font-medium px-4 py-2 cursor-pointer ${
							activeTab === label
								? 'text-gray-900 border-b-2 border-blue-500'
								: 'text-gray-500'
						}`}
					>
						{label}
					</li>
				))}
			</ul>
			<div className="tab-content-transition">
				{activeTab === 'Suggestions' && <AvailableQuries setQuery={setQuery} />}
				{activeTab === 'Tables Available' && (
					<AvailableTables setQuery={setQuery} />
				)}
				{activeTab === 'History' && (
					<History
						history={history}
						setHistory={setHistory}
						setQuery={setQuery}
					/>
				)}
			</div>
		</div>
	);
};

export default memo(Sidebar);
