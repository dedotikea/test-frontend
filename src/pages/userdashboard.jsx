import React, { useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from '../components/home';
import Profile from '../components/profile';
import Projects from '../components/projects';
import Notifications from '../components/notifications';
import Settings from '../components/settings';
import Logout from '../components/logout';
import logoWebApp from "../assets/logo-no-background.png";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const UserDashboard = () => {

  //drawer handler
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  //menu handler
  const [menu, setMenu] = useState("Home")
  const userDashboardMenuHandler = (menu) => {
    switch (menu) {
      case "Home":
        return (
          <Home />
        )
      case "Profile":
        return (
          <Profile />
        )
      case "Projects":
        return (
          <Projects />
        )
      case "Notifications":
        return (
          <Notifications />
        )
      case "Settings":
        return (
          <Settings />
        )
      case "Logout":
        return (
          <Logout />
        )
      default:
        break;
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              background: "#FEF8EC",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
                color: "#313435"
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#313435"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} PaperProps={{
          sx: {
            backgroundColor: "#DCD6CD",
          }
        }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [1],
            }}
          >
            <Box component="img" src={logoWebApp} sx={{
              height: 50,
            }}></Box>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {<>
              <ListItemButton onClick={() => {
                setMenu("Home");
              }}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                setMenu("Profile");
              }}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                setMenu("Projects");
              }}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                setMenu("Notifications");
              }}>
                <ListItemIcon>
                  <Badge badgeContent={4} sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#1A2E4E"
                    }
                  }}>
                    <NotificationsIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
              <ListItemButton onClick={() => {
                setMenu("Settings");
              }}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </>}
            <Divider sx={{ my: 1 }} />
            {<>
              <ListItemButton onClick={() => {
                setMenu("Logout");
              }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>

            </>}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80vh',
                    overflow: "auto",
                    backgroundColor: "#1A2E4E",
                  }}
                >
                  {/* <Chart /> */}
                  {userDashboardMenuHandler(menu)}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserDashboard