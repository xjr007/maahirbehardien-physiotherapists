import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const NavbarLargeScreen = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position='fixed'>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor='inherit'>
          <span className='logo'>Maahir Behardien Physiotherapists</span>
          <Tab exact href='#home' label='Home' className='tab' />
          <Tab href='#about-us' label='About us' className='tab' />
          <Tab label='Location' className='tab' />
          <Tab label='Get in touch' className='contact-tab tab' />
        </Tabs>
      </AppBar>
      <Tabs />
    </Paper>
  );
};

export default NavbarLargeScreen;
