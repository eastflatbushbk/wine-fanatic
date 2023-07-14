import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import UsersCard from './UsersCard'
import { useSelector } from 'react-redux'

export default function UsersPage() {

    const { users } = useSelector(store => store.usersReducer)
  console.log(users)

  return (
    <Box m={10}>
       <Container>
        <Grid container spacing={3}>
        { users.map(u => (
              <Grid item key={u.id} xs={12} md={6} lg={4}>
                <UsersCard user={u} />
                </Grid>
            )) }
        </Grid>
       </Container>
      
   </Box>
  
  )
}
