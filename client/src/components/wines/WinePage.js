import React from 'react'
import { useSelector } from 'react-redux'
import WineCard from './WineCard'

import Grid from '@mui/material/Grid';

import { Box, Container } from '@mui/material';


const WinePage = () => {
  
  
  const  wines  = useSelector(store => store.winesReducer)
  console.log(wines)
    // const wineList = wines.map( w => <WineCard key={w.id} wine={w}  />)
    // const wineList = wines.map(w => ( <Grid item key={w.id} xs={12} md={6} lg={4}>
    //     <WineCard/>))
    
  return (
    <Box m={10}>
       <Container>
        <Grid container spacing={3}>
        { wines.map(w => (
              <Grid item key={w.id} xs={12} md={6} lg={4}>
                <WineCard wine={w} />
                </Grid>
            )) }
        </Grid>
       </Container>
      
   </Box>
  
  )
}

export default WinePage