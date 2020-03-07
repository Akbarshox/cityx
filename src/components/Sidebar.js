import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faStackOverflow, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Home from '../assets/Home.svg';
import Man from '../assets/Man.svg';
import Settings from '../assets/Settings.svg';
import Contact from '../assets/Contact.svg';
import Eye from '../assets/Eye.svg';

const drawerWidth = 60;

const useStyles = makeStyles(theme => ({
   root: {
      display: 'flex',
      position: 'fixed'
   },
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#1c1c1c'
   },
   icons: {
      marginLeft: -3
   },
   img: {
      width: 30
   },
   items2: {
      position: 'absolute',
      width: 10,
      marginLeft: 20,
      bottom: 0,
      marginBottom: 10
   },
   fa: {
      "&:hover, &:focus": {
         color: '#00fc7e'
      },
      marginTop: 7,
      color: '#4E4D4D',
   }
}));

function Sidebar(props) {
   const { container } = props;
   const classes = useStyles();
   const theme = useTheme();
   const [mobileOpen, setMobileOpen] = React.useState(false);
   
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   
   const drawer = (
       <div>
          <div className={classes.icons}>
             <div className={classes.toolbar} />
                <List>
                   <List><ListItem button><Link to={`/`}><img src={Home} alt="req" className={classes.img} /></Link></ListItem></List>
                   <List><ListItem button><Link to={`/about`}><img src={Man} alt="req" className={classes.img} /></Link></ListItem></List>
                   <List><ListItem button><Link to={`/skills`}><img src={Settings} alt="req" className={classes.img} /></Link></ListItem></List>
                   <List><ListItem button><Link to={`/did`}><img src={Eye} alt="req" className={classes.img} /></Link></ListItem></List>
                   <List><ListItem button><Link to={`/contact`}><img src={Contact} alt="req" className={classes.img} /></Link></ListItem></List>
                </List>
          </div>
          <div className={classes.items2}>
             <List>
                <a href="facebook.com/profile.php?id=100008033747950">
                   <FontAwesomeIcon icon={faFacebookF} className={classes.fa} />
                </a>
                <a href="https://www.instagram.com/_a_shox_/"><FontAwesomeIcon icon={faInstagram} className={classes.fa} /></a>
                <a href="https://github.com/Akbarshox"><FontAwesomeIcon icon={faGithub} className={classes.fa} /></a>
                <a href="https://stackoverflow.com/users/12605298/akbarjon-mukhammatjanov">
                   <FontAwesomeIcon icon={faStackOverflow} className={classes.fa} />
                </a>
             </List>
          </div>
       </div>
   );
   
   return (
       <div className={classes.root}>
          <Hidden smUp implementation="css">
             <Drawer
                 container={container}
                 variant="temporary"
                 anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                 open={mobileOpen}
                 onClose={handleDrawerToggle}
                 classes={{
                    paper: classes.drawerPaper,
                 }}
                 ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                 }}
             >
                {drawer}
             </Drawer>
          </Hidden>
          <nav className={classes.drawer} aria-label="mailbox folders">
             <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                       paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                   {drawer}
                </Drawer>
             </Hidden>
          </nav>
       </div>
   );
}

Sidebar.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   container: PropTypes.any,
};

export default Sidebar;