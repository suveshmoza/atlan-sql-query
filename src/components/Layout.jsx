import { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Tab from './Tab';

const Layout = ({ children }) => {
	const [tabs, setTabs] = useState([{ id: 1 }]);
	const [activeTab, setActiveTab] = useState(1);
	const [latestTabId, setLatestTabId] = useState(1); // Track the latest used tab ID

	const handleAddTab = () => {
		const newTabId = latestTabId + 1; // Get the next unique ID
		setTabs([...tabs, { id: newTabId }]);
		setActiveTab(newTabId);
		setLatestTabId(newTabId); // Update the latestTabId
	};
	const handleRemoveTab = (id) => {
		const tabIndexToRemove = tabs.findIndex((tab) => tab.id === id);
		if (tabIndexToRemove === -1) {
			// Tab with the given ID not found, return early to avoid any issues.
			return;
		}

		const isCurrentTabActive = id === activeTab;

		setTabs((prevTabs) => {
			const updatedTabs = prevTabs.filter((tab) => tab.id !== id);

			// Determine the new active tab index if the current tab is active and it's not the last tab
			let newActiveTabIndex = isCurrentTabActive ? tabIndexToRemove - 1 : -1;
			if (newActiveTabIndex < 0 && updatedTabs.length > 0) {
				// Ensure the new active tab index is within bounds.
				newActiveTabIndex = 0;
			}

			// Return the updated tabs
			return updatedTabs;
		});
	};

	useEffect(() => {
		if (activeTab === null && tabs.length > 0) {
			// If no tab is currently active, set the first tab as active
			setActiveTab(tabs[0].id);
		} else if (
			activeTab !== null &&
			!tabs.some((tab) => tab.id === activeTab)
		) {
			// If the active tab is removed, set the new active tab
			const newActiveTabId = tabs.length > 0 ? tabs[tabs.length - 1].id : null;
			setActiveTab(newActiveTabId);
		}
	}, [activeTab, tabs]);

	return (
		<>
			<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 mt-[1px]">
				{tabs.map((tab) => (
					<Tab
						key={tab.id}
						id={tab.id}
						isActive={tab.id === activeTab}
						onClick={() => setActiveTab(tab.id)}
						onClose={() => handleRemoveTab(tab.id)}
					/>
				))}
				<button className="text-2xl text-blue-500 ml-1" onClick={handleAddTab}>
					<FaPlusCircle />
				</button>
			</ul>
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
		</>
	);
};

export default Layout;
