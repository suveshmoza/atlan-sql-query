import React, { lazy, Suspense } from 'react';
import { Layout, Loading } from './components';

const Playground = lazy(() => import('./pages/Playground'));

function App() {
	return (
		<div className="h-[100vh]">
			<Layout>
				<Suspense fallback={<Loading />}>
					<Playground />
				</Suspense>
			</Layout>
		</div>
	);
}

export default App;
