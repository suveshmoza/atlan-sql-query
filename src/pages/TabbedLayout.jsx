import React, { useState } from 'react';
import { Tab } from '../components';
import Playground from './Playground';

const TabbedLayout = () => {
	const [tabs, setTabs] = useState([{ id: 1 }]);
	const [activeTab, setActiveTab] = useState(1);

	const handleAddTab = () => {
		const newTabId = tabs.length + 1;
		setTabs([...tabs, { id: newTabId }]);
		setActiveTab(newTabId);
	};

	const handleRemoveTab = (id) => {
		const updatedTabs = tabs.filter((tab) => tab.id !== id);
		updatedTabs.forEach((tab, index) => {
			tab.id = index + 1;
		});

		setTabs(updatedTabs);

		if (activeTab === id) {
			const newActiveTab =
				updatedTabs[activeTab - 1]?.id ||
				updatedTabs[activeTab - 2]?.id ||
				null;
			setActiveTab(newActiveTab - 1);
		}
	};

	if (tabs.length === 0) {
		setTimeout(() => {
			handleAddTab();
		}, 100);
	}

	return (
		<div className="bg-gray-100 pt-[1px] px-1">
			<div className="flex items-center space-x-1">
				{tabs.map((tab) => (
					<Tab
						key={tab.id}
						id={tab.id}
						isActive={tab.id === activeTab}
						onClick={setActiveTab}
						onClose={handleRemoveTab}
					/>
				))}
				<button
					className="px-2 text-xl rounded bg-blue-500 text-white"
					onClick={handleAddTab}
				>
					+
				</button>
			</div>
			<div className="bg-white rounded-lg">
				{tabs.map((tab) => (
					<div
						key={tab.id}
						className={tab.id === activeTab ? 'block' : 'hidden'}
					>
						<Playground />
					</div>
				))}
			</div>
		</div>
	);
};

export default TabbedLayout;
