import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

// const theme = createMuiTheme({
// 	palette: {
// 		secondary: {
// 			main: '#F2380F',
// 		},
// 	},
// });

export const NavbarLargeScreen = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		
			<Paper className={classes.root}>
				<Tabs value={value} onChange={handleChange} centered indicatorColor='inherit'>
					<span className='logo'>Maahir Behardien Physiotherapists</span>
					<Tab label='Home' className='tab' />
					<Tab label='What We Do' className='tab' />
					<Tab label='Our Team' className='tab' />
					<Tab label='Contact Us' className='contact-tab tab' />
				</Tabs>
			</Paper>
	);
};

export default NavbarLargeScreen;
