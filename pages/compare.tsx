import Container from '../layouts/Container';
import MainLayout from '../layouts/Main';
import ComparePageComponent from '../PageComponents/ComparePage';

const Compare = () => {
	return (
		<MainLayout>
			<Container>
				<ComparePageComponent />
			</Container>
		</MainLayout>
	);
};

export default Compare;
