import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

import { useMediaQuery } from 'react-responsive';
import NavbarLargeScreen from './NavbarLargeScreen';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

export const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-device-width: 1224px)',
	});

	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			{isDesktopOrLaptop && <NavbarLargeScreen />}

			{isTabletOrMobileDevice && (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar
						position='fixed'
						className={clsx(classes.appBar, {
							[classes.appBarShift]: open,
						})}>
						<Toolbar>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={handleDrawerOpen}
								edge='start'
								className={clsx(classes.menuButton, open && classes.hide)}>
								<MenuIcon />
							</IconButton>
							<Typography noWrap>Maahir Behardien - Physiotherapists</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						className={classes.drawer}
						variant='persistent'
						anchor='left'
						open={open}
						classes={{
							paper: classes.drawerPaper,
						}}>
						<div className={classes.drawerHeader}>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
							</IconButton>
						</div>
						<Divider />
						<List className='list-1'>
							{['Home', 'What we do', 'Our Team'].map((text, index) => (
								<ListItem button key={text} className='tab'>
									<ListItemIcon>
										{index === 0 && <HomeSharpIcon />}
										{index === 1 && <HelpOutlineSharpIcon />}
										{index === 2 && <EmojiPeopleSharpIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
						<Divider />
						<List className='list-2'>
							{['Get in touch'].map((text, index) => (
								<ListItem button key={text} className='tab'>
									<ListItemIcon>{index === 0 && <CallSharpIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Drawer>
				</div>
			)}
		</div>
	);
};

export default Navbar;
