import React from 'react';
import Container from '../../layouts/Container';
import MainLayout from '../../layouts/Main';
import SeeAllComponent from '../../PageComponents/SeeAll';

const SeeAll = () => {
	return <div>
		<MainLayout>
			<Container>

				<SeeAllComponent />
			</Container>
		</MainLayout>
	</div >;
};

export default SeeAll;
