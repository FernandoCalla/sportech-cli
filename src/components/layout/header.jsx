import { IconButton, Toolbar, Typography } from "@mui/material"
import ButtonChangeTheme from "../ButtonChangeTheme"
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";
import MuiAppBar from '@mui/material/AppBar';

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

const HeaderLayout = ({handleDrawerOpen,open,setOpen}) =>{
    return(
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src="src/assets/SporTechLogo.png" alt="logo" width="80" height="80"/>
          {/* <Typography variant="h6" noWrap component="div">
            SporTech
          </Typography>           */}
            <ButtonChangeTheme/>
        </Toolbar>
      </AppBar>
    )
}

export default HeaderLayout