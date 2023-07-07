import React from 'react'






import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, IconButton, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
// import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
    const { loggedIn } = useSelector(store => store.usersReducer);
    console.log(loggedIn)

    
    const navigationLinks = loggedIn ? (

        <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
            🍷Fanatic
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Stack direction='row' spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">add wine</Button>
            <Button color="inherit">my cellar</Button>
            <Button color="inherit">users</Button>
            </Stack>
           </Typography>
          
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

    ) : (

<Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
            🍷Fanatic
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
           </Typography>
           <Button color="inherit">signin</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
        
  return (
    
    

    <div>

    {navigationLinks}

    </div>
  )
}

export default Navbar