import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, setErrors } from '../components/actions/errors'
import { Alert, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
// import LockOpenIcon from '@material-ui/icons/LockOpen';

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
        // setErrors([])
        dispatch(clearErrors())
        console.log("sgn in submited") 
        const createUser = {
          username: username,
          age: age,
          location: location,
          favorite_club: favoriteVarietal,
          password: password,
          password_confirmation: confirmation
         }
        
        fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createUser),
        })
           .then(res => {
            if (res.ok) {
              res.json().then(user => {
                // addUser(user)
                const addUserAction = {
                    type: "ADD_USER",
                    payload: user
                  }
                  dispatch(addUserAction)
                // loginUser(user)
                const loginAction = {
                    type: "LOGIN_USER",
                    payload: user
                  }
                  dispatch(loginAction)
                navigate('/wines')
              })
            } else {
              res.json().then(err => {
                console.log(err)
                console.log(err.age)
                const errorArr = []
                 if (err.age !== undefined){ errorArr.push(`age : ${err.age}`) }
                 if (err.username !== undefined){errorArr.push(`username : ${err.username}`)}
                if (err.location !== undefined){ errorArr.push(`location : ${err.location}`) }
                if (err.favorite_varietal !== undefined){ errorArr.push(`favorite_club : ${err.favorite_varietal}`) }
                if (err.password !== undefined){ errorArr.push(`password : ${err.password}`) }
                if (err.password_confirmation !== undefined){ errorArr.push(`password_confirmation : ${err.password_confirmation}`) }
                 console.log(errorArr)
                //  setErrors(errorArr)
                 dispatch(setErrors(errorArr));
              })
            }
          })
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
                    <h2>Please Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Age' placeholder='Enter age' fullWidth required onChange={(e) => setAge(e.target.value)} />
                <TextField label='Location' placeholder='Enter location' fullWidth required onChange={(e) => setLocation(e.target.value)} />
                <TextField label='Varietal' placeholder='Enter favorite varietal' fullWidth required onChange={(e) => setFavoriteVarietal(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)} />
                <TextField label='Password confirmation' placeholder='Enter password confirmation' type='password' fullWidth required onChange={(e) => setConfirmation(e.target.value)} />
              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                
                <Typography > Do you have an account ?
                     <Link href="/login" >
                        Log in 
                </Link>
                </Typography>
                {/* <div>{displayErrors}</div> */}
                {displayErrors && displayErrors.length > 0 && (<Alert severity="warning">{displayErrors}</Alert>)}
            </Paper>
        </Grid>

    </div>
    
    </form>
    </Box>
  )
}
