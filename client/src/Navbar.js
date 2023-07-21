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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors } from './components/actions/errors';
// import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(store => store.usersReducer)
    const { loggedIn } = useSelector(store => store.usersReducer);
    console.log(`logged in ? ${loggedIn}`)
    // console.log(currentUser.users_wines)
    // console.log(`current user id : ${currentUser.id}`)

    const handleSignInClick = () => {
        dispatch(clearErrors())
        navigate("/signin")
        
      };
    
    const handleLogInClick = () => {
        dispatch(clearErrors())
        navigate("/login")
        
      };
    const handleMyCellarClick = () => {
        dispatch(clearErrors())
        navigate(`/cellars/${currentUser.id}`)
        
      };
    const handleUsersClick = () => {
        dispatch(clearErrors())
        navigate("/users")
        
      };
    const handleAddWineClick = () => {
        dispatch(clearErrors())
        navigate("/add_wine")
        
      };
    const handleHomeClick = () => {
        dispatch(clearErrors())
        navigate("/wines")
        
      };

      function handleLogout() {
        dispatch(clearErrors())
        fetch("/logout", {
            method: "DELETE"
        })
        const action = {
            type: "LOGOUT_USER"
           
          }
          dispatch(action)
         navigate('/login')
       
    }
    


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
            <Button color="inherit"onClick={handleHomeClick}>Home</Button>
            <Button color="inherit" onClick={handleAddWineClick}>add wine</Button> 
            <Button color="inherit" onClick={handleMyCellarClick}>my cellar</Button>
            <Button color="inherit" onClick={handleUsersClick}>users</Button>
            </Stack>
           </Typography>
          
          <Button color="inherit" onClick={handleLogout} >Logout</Button>
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
           <Button color="inherit" onClick={handleSignInClick} >signin</Button>
          <Button color="inherit" onClick={handleLogInClick}>Login</Button>
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