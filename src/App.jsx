import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import Layout from './components/Layout';

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
