// import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CellarCard from './CellarCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function CellarPage() {
    const { users } = useSelector(store => store.usersReducer)
  console.log(users)
    const  wines  = useSelector(store => store.winesReducer)
  console.log(wines)

  const userId = parseInt(useParams().id)


  const userObj = users.find(u => u.id === userId)
        console.log(userObj)

      const filteredWines = wines.filter(wine => userObj.users_wines.some(userWine => userWine.wine_id === wine.id)); 
      console.log(filteredWines)  
      
    const cellarWines =   filteredWines.map(wine => ({...wine, quantity: userObj.users_wines.find(userWine => userWine.wine_id === wine.id).quantity}));
    
      console.log(cellarWines)

//       const userObj = users.find(user => user.id === userId);
// const userObjWines = userId.users_wines.map(userWine => {
//    const wine = wines.find(wine => wine.id === userWine.wine_id);
//    return { wine, quantity: userWine.quantity };
// });
// console.log(userObjWines)

  return (
   
    <Box m={10}>
        <Grid>
        <Typography variant="body2" style={{ color: 'red' }}>
                   {userObj.username}'s cellar    
        </Typography>
        </Grid>
        &nbsp;
        <Container>
        <Grid container spacing={3}>
        { cellarWines.map( cW => (
              <Grid item key={cW.id} xs={12} md={6} lg={4}>
                <CellarCard wine={cW} userObj={userObj}/>
                </Grid>
            )) }
        </Grid>
       </Container>
      
   </Box>
  )
}
