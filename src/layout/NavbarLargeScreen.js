import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#F2380F',
		},
	},
});

export const NavbarLargeScreen = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<Paper className={classes.root}>
			<AppBar position='fixed'>
			<Tabs value={value} onChange={handleChange} centered indicatorColor='secondary'>
					<span className='logo'>Maahir Behardien Physiotherapists</span>
					<Tab label='Home' className='tab' />
					<Tab label='About us' className='tab' />
					<Tab label='Location' className='tab' />
					<Tab label='Get in touch' className='contact-tab tab' />
				</Tabs>
			</AppBar>
				
			</Paper>
		</ThemeProvider>
	);
};

export default NavbarLargeScreen;
