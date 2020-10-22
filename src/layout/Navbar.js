import React from 'react';

import { useMediaQuery } from 'react-responsive';
import NavbarLargeScreen from './NavbarLargeScreen';
import NavbarTabMobScreen from './NavbarMobTabScreen';


export const Navbar = () => {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-device-width: 1080px)',
	});

	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1080px)',
	});

	return (
		<div>
			{isDesktopOrLaptop && <NavbarLargeScreen />}

			{isTabletOrMobileDevice && <NavbarTabMobScreen/>}
		</div>
	);
};

export default Navbar;
