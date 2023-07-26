import { useState, memo, useRef } from 'react';
import History from './History';
import AvailableQuries from './AvailableQuries';
import AvailableTables from './AvailableTables';
import { FaTable, FaHistory } from 'react-icons/fa';
import { MdOutlineEditNote } from 'react-icons/md';
import { Tabs } from 'flowbite-react';

const Sidebar = ({ history, setQuery, setHistory }) => {
	const [activeTab, setActiveTab] = useState(0);
	const tabsRef = useRef(null);
	const props = { setActiveTab, tabsRef };
	return (
		<div className="h-[300px] overflow-scroll">
			<Tabs.Group
				aria-label="Default tabs"
				style={('underline', 'fullWidth')}
				ref={props.tabsRef}
				onActiveTabChange={(tab) => props.setActiveTab(tab)}
			>
				<Tabs.Item active title="Available Queries" icon={MdOutlineEditNote}>
					<AvailableQuries setQuery={setQuery} />
				</Tabs.Item>
				<Tabs.Item title="Tables Available" icon={FaTable}>
					<AvailableTables setQuery={setQuery} />
				</Tabs.Item>
				<Tabs.Item title="History" icon={FaHistory}>
					<History
						history={history}
						setHistory={setHistory}
						setQuery={setQuery}
					/>
				</Tabs.Item>
			</Tabs.Group>
		</div>
	);
};

export default memo(Sidebar);
