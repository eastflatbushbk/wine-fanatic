import React from 'react'

export default function signin() {
  return (
    <form onSubmit={handleSignInSubmit}>
    <div >
        
        <Grid >
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     
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
                     <Link href="#" >
                        Log in 
                </Link>
                </Typography>
                <Alert severity="warning">{errors}</Alert>
            </Paper>
        </Grid>

    </div>
    
    </form>
  )
}
