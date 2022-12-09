import React from 'react';
import Header from '../../components/Header';
import Topbar from '../../components/Topbar';
import { MainLayoutProps } from './MainLayout.props';
import Footer from '../../components/Footer';
import MobileFooter from '../../components/MobileFooter';
import useWindowSize from '../../hooks/useWindowsSize';
import Bottombar from '../../components/Bottombar';
import MobileNavigation from '../../components/MobileNavigation';

const MainLayout = ({ children }: MainLayoutProps) => {
	const winSize = useWindowSize()
	return (
		<div>
			<Topbar />
			<Header />

			{children}
			{
				winSize.width <= 700 ?
					<MobileFooter />
					:
					<Footer />
			}

			<Bottombar />
			{
				winSize.width >= 600 ?
					null : <MobileNavigation /> 
			}

		</div>
	);
};

export default MainLayout;
