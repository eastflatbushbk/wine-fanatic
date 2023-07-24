import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../components/actions/errors'
import { Alert, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { signInUser } from '../components/actions/users'


export default function Signin() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")
    const [favoriteVarietal, setFavoriteVarietal] = useState("")
    const [confirmation, setConfirmation] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { errors } = useSelector(store => store.errorsReducer)

    const paperStyle={padding :20,height:'100vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

    function handleSignInSubmit(event){
        event.preventDefault()
        
        dispatch(clearErrors())
        console.log("sgn in submited") 
        const createUser = {
          username: username,
          age: age,
          location: location,
          favorite_varietal: favoriteVarietal,
          password: password,
          password_confirmation: confirmation
         }
        
         dispatch(signInUser(createUser,navigate ))
       
       }
       
 console.log(errors)
       const displayErrors = errors && errors.map( error => <li >{error}</li>)
  

  return (
    <Box m={3}>
    <form onSubmit={handleSignInSubmit}>
    <div >
        
        <Grid >
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <h1>🔒</h1>
                    <h2>Please Sign up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Age' placeholder='Enter age' fullWidth required onChange={(e) => setAge(e.target.value)} />
                <TextField label='Location' placeholder='Enter location' fullWidth required onChange={(e) => setLocation(e.target.value)} />
                <TextField label='Favorite varietal' placeholder='Enter favorite varietal' fullWidth required onChange={(e) => setFavoriteVarietal(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)} />
                <TextField label='Password confirmation' placeholder='Enter password confirmation' type='password' fullWidth required onChange={(e) => setConfirmation(e.target.value)} />
              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                
                <Typography > Do you have an account ?
                     <Link href="/login" >
                        Log in 
                </Link>
                </Typography>
                
                {displayErrors && displayErrors.length > 0 && (<Alert severity="warning">{displayErrors}</Alert>)}
            </Paper>
        </Grid>

    </div>
    
    </form>
    </Box>
  )
}
