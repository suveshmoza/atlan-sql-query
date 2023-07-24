import React, { useState, useEffect } from 'react';
import Tab from './Tab';

const Layout = ({ children }) => {
	const [tabs, setTabs] = useState([{ id: 1 }]);
	const [activeTab, setActiveTab] = useState(1);

	// Add a new tab with a unique ID
	const handleAddTab = () => {
		const newTabId = tabs.length + 1;
		setTabs([...tabs, { id: newTabId }]);
		setActiveTab(newTabId);
	};

	// Remove a tab based on its ID
	const handleRemoveTab = (id) => {
		const updatedTabs = tabs.filter((tab) => tab.id !== id);
		setTabs(updatedTabs);
	};

	// Add a new tab when there are no tabs present
	useEffect(() => {
		if (tabs.length === 0) {
			handleAddTab();
		}
	}, [tabs]);

	// Set the first tab as active if no tab is currently active
	useEffect(() => {
		if (activeTab === null && tabs.length > 0) {
			setActiveTab(tabs[0].id);
		}
	}, [activeTab, tabs]);

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
						{children}
					</div>
				))}
			</div>
		</div>
	);
};

export default Layout;
