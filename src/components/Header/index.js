import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CommentIcon from '@material-ui/icons/Comment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import { useStyles } from './styles';
import Bar from './Bar';
import clsx from  'clsx';

const Header = ({ title, zoomIndex }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const faculties = [
    {name: "Faculty of Informatics", path: "/ik", abreviation: "IK"},
    {name: "Faculty of Sciences", path: "/ttk", abreviation: "TTK"},
    {name: "Faculty of Economics", path: "/gtk", abreviation: "GTK"},
  ]
  const isAccountMenuOpen = Boolean(anchorEl);

  const handleAccountMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      { /* The Top Bars */ }
      <Grid 
        container 
        justifyContent="space-between" 
        alignItems="flex-start" 
        className={classes.container}
      >
        <Grid item>
          <Bar>
            <Typography 
              align="center"
              variant="overline" 
              noWrap
            >
              <Tooltip title="Home" placement="bottom" arrow>
                <b> ELTE </b>
              </Tooltip >| Uniboard { title }  
            </Typography>
          </Bar>
          
          { /* The Tools Bar */ }
          <Grid className={ clsx(classes.container, classes.tools) }>
            <Grid item>
              <Bar vertical>
                <Tooltip title="Text" placement="right" arrow>
                  <IconButton disableRipple className={classes.iconBtn} color="primary">
                    <TextFieldsIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Comment" placement="right" arrow>
                  <IconButton disableRipple className={classes.iconBtn} color="primary">
                    <CommentIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More actions" placement="right" arrow>
                  <IconButton disableRipple className={classes.iconBtn} color="primary">
                    <MoreHorizIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
              </Bar>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Bar>
            <Tooltip title="Notifications" placement="bottom" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <NotificationsIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings" placement="bottom" arrow>
              <IconButton disableRipple className={classes.iconBtn} color="primary">
                <SettingsIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account" placement="bottom" arrow>
              <IconButton 
                disableRipple 
                className={classes.iconBtn} 
                color="primary"
                aria-controls="primary-search-account-menu"
                onClick={handleAccountMenuOpen}
              >
                <AccountCircle className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Bar>
          { /* Dropdown */}
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            id="primary-search-account-menu"
            keepMounted
            open={isAccountMenuOpen}
            onClose={handleAccountMenuClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

          { /* Zoom index */ }
          <Grid className={ clsx(classes.container, classes.zoomIndex) }>
            <Grid item>
              <Bar>
                <Typography variant="body1" className={ classes.textBtnContent }>
                  {zoomIndex}%
                </Typography>
              </Bar>
            </Grid>
          </Grid>

          { /* Switch Faculties */ }
          <Grid className={ clsx(classes.container, classes.switch) }>
            {faculties.map((faculty) => (
            <Grid item key={faculty.abreviation}>
              <Link href={faculty.path} className={classes.textBtn}>
              <Bar vertical>
                <Tooltip title={faculty.name} placement="left" arrow>
                  <Typography className={ classes.textBtnContent }>
                    {faculty.abreviation}
                  </Typography>
                </Tooltip>
              </Bar>
              </Link>
            </Grid>
            ))}
          </Grid>
        </Grid> 
      </Grid>
    </div>
  );
}

export default Header;
