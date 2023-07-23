import { useState, memo } from 'react';
import History from './History';
import AvailableQuries from './AvailableQuries';
import AvailableTables from './AvailableTables';

const Sidebar = ({ history, setQuery }) => {
	const [activeTab, setActiveTab] = useState('Suggestions');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const tabs = [
		{
			label: 'Suggestions',
			content: <AvailableQuries setQuery={setQuery} />,
		},
		{
			label: 'Tables Available',
			content: <AvailableTables setQuery={setQuery} />,
		},
		{
			label: 'History',
			content: <History data={history} setQuery={setQuery} />,
		},
	];

	return (
		<div className="h-[300px] border rounded-lg p-2">
			<ul className="flex justify-evenly">
				{tabs.map((tab) => (
					<li
						key={tab.label}
						onClick={() => handleTabClick(tab.label)}
						className={
							activeTab === tab.label
								? 'text-gray-900 text-base font-medium px-4 py-2 border-b-2 border-blue-500'
								: 'text-gray-500 text-base font-medium px-4 py-2'
						}
					>
						{tab.label}
					</li>
				))}
			</ul>
			<div className={`${activeTab}`}>
				{tabs.find((tab) => tab.label === activeTab).content}
			</div>
		</div>
	);
};

export default memo(Sidebar);
