import React, { useState } from 'react'
import { clearErrors } from '../components/actions/errors'
import { useNavigate } from 'react-router-dom';
import {  Alert, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../components/actions/users';




export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { errors } = useSelector(store => store.errorsReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

    console.log(errors)


    function handleLogInSubmit(event){
        event.preventDefault()
        // setErrors([])
        dispatch(clearErrors())
        console.log("log in submited")

        dispatch(loginUser(username, password, navigate))
      
        }
  
        
         
  return (
    <Box m={3}>
     <form onSubmit={handleLogInSubmit}>
    <div >
        
        <Grid >
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                   <h1>🔒</h1>
                    <h2>Please Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)} />
              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Log in</Button>
                
                <Typography > Don't have an account?
                     <Link href="/signin" >
                        Sign Up 
                </Link>
                </Typography>
               <div> 
                {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
            </div>
            </Paper>
        </Grid>

     </div>
    
    </form>
    </Box>

  )
}
