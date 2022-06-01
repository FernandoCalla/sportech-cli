import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import HeaderLayout from './header';
import Sidebar from './sidebar';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function Dashboard({navConfig}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderLayout handleDrawerOpen={handleDrawerOpen} open={open} setOpen={setOpen}/>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} setOpen={setOpen} navConfig={navConfig}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>      
        <DrawerHeader />
        <Outlet/>
      </Box>
    </Box>
  );
}