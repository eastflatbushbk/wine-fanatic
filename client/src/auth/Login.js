import React, { useState } from 'react'
import { clearErrors, setErrors } from '../components/actions/errors'
import { useNavigate } from 'react-router-dom';
import {  Alert, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { errors } = useSelector(store => store.errorsReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    // const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    


    function handleLogInSubmit(event){
        event.preventDefault()
        // setErrors([])
        dispatch(clearErrors())
        console.log("log in submited")

        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password})
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                // loginUser(user)
                const action = {
                    type: "LOGIN_USER",
                    payload: user
                  }
                  dispatch(action)
                navigate('/wines')
              })
            } else {
              res.json().then(err => {
                
                // setErrors(err.errors)
                dispatch(setErrors(err.errors));
                console.log(err.errors)
              })
            }
          })
        }
  
  return (
    <form onSubmit={handleLogInSubmit}>
    <div >
        
        <Grid >
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     
                    <h2>Please Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)} />
              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Log in</Button>
                
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
                <Alert severity="warning">{errors}</Alert>
            </Paper>
        </Grid>

    </div>
    
    </form>
  )
}
