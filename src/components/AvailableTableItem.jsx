import { memo } from 'react';
import { ListGroup } from 'flowbite-react';

const AvailableTableItem = ({ name, data, setQuery }) => {
	const handleItemClick = (item) => {
		const query = `Select ${item} from ${name};`;
		setQuery(query);
	};

	return (
		<ListGroup className="overflow-scroll h-[80px]">
			{data.map((item) => (
				<ListGroup.Item key={item} onClick={() => handleItemClick(item)}>
					{item} [<span className="capitalize">{typeof item}</span>]
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default memo(AvailableTableItem);
