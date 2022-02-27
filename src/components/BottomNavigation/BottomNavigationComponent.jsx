import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/DashboardTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
});

const currDir = window.location.pathname.slice(1);

function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(currDir ? (currDir === 'mesher/' ? 'home' : currDir) : 'home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to="/mesher/" label="wallpapers" value="home" icon={<DashboardIcon />} />
      <BottomNavigationAction component={Link} to="/mesher/search" label="search" value="search" icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/mesher/info" label="info" value="info" icon={<InfoIcon />} />
    </BottomNavigation>
    </>
  );
}

export default BottomNavigationBar;