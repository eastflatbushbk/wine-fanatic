import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearErrors } from '../actions/errors';
import { addToUsersWines } from '../actions/usersWines';




const showData = {
    name: "",
    vintage: "",
    region: ""
    }
export default function AddToCellarForm({loading}) {
   
    const { loggedIn } = useSelector(store => store.usersReducer)
    const [ showWine, setShowWine ] = useState(showData)
    const { errors } = useSelector(store => store.errorsReducer)
    const { users } = useSelector(store => store.usersReducer)
    const { currentUser } = useSelector(store => store.usersReducer)
    const wines  = useSelector(store => store.winesReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location.state)

    const  wineId = location.state.wineId
        console.log('wine id ',wineId)
        console.log(errors)

        useEffect(() => {
            if( !loading && !loggedIn) {
              navigate('/login')
            }
           
           const wine = wines.find(wine => wine.id === parseInt(wineId))
               console.log('wine in the form ',wine)
            
          setShowWine({
            name: wine.name,
            vintage: wine.vintage,
            region: wine.region
          })
         
            
          }, [loading, loggedIn, navigate, wineId, wines])

          const goBack = () => {
            navigate(-1);
            dispatch(clearErrors())
           
          }

          function handleSubmit (event ){
            event.preventDefault()
             dispatch(clearErrors())
            
             dispatch(addToUsersWines(wineId, navigate, currentUser, users ))
       
        }

  return (
    <Box m={15}>
    <form onSubmit={handleSubmit}>
    <TextField
      fullWidth
      id="name"
      name="name"
      label="name"
      value={showWine.name}
      disabled
    />
     
    <TextField
      fullWidth
      id="vintage"
      name="vintage"
      label="vintage"
      value={showWine.vintage}
      disabled
    />
     
    <TextField
      fullWidth
      id="region"
      name="region"
      label="region"
      value={showWine.region}
      disabled
    />   
    
    <Button color='primary' variant='contained' type='submit'>
       add to cellar
     </Button>
      
    <Button color='primary' variant='contained'  type="button" onClick={goBack}>
       cancel
     </Button>
     {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
  </form>
  </Box>
  )
}
