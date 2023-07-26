import { Spinner } from 'flowbite-react';

const Loading = () => {
	return (
		<div className="text-center mt-20">
			<Spinner aria-label="Extra large spinner example" size="xl" />
		</div>
	);
};

export default Loading;
