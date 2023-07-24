import Layout from './components/Layout';
import Playground from './pages/Playground';

function App() {
	return (
		<div className="h-[100vh]">
			<Layout>
				<Playground />
			</Layout>
		</div>
	);
}

export default App;
