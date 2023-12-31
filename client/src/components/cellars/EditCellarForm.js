import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { clearErrors } from '../actions/errors'
import { Alert, Box, Button, TextField } from '@mui/material'
import { editCellarWine } from '../actions/usersWines'


const showData = {
  name: "",
  vintage: "",
  region: ""
  }
const formData = {
  quantity: ""
  }
export default function EditCellarForm({loading}) {
    const [amount, setAmount] = useState(formData)
    const [ showWine, setShowWine ] = useState(showData)

    const { errors } = useSelector(store => store.errorsReducer)
    const { users } = useSelector(store => store.usersReducer)
    const wines  = useSelector(store => store.winesReducer)
    const { currentUser } = useSelector(store => store.usersReducer)
    const  usersWines  = useSelector(store => store.usersWinesReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location.state)

    const  wineId = location.state.wineId
        console.log('wine id ',wineId)
    const userId = location.state.userId
        console.log(userId)
        console.log(users)
        console.log(currentUser)
          

        useEffect(() => {
                 
         const wine = wines.find(wine => wine.id === parseInt(wineId))
             console.log('wine in the form ',wine)
         
        setShowWine({
          name: wine.name,
          vintage: wine.vintage,
          region: wine.region
        })
                 
        }, [ wineId, wines])

      
  
      const filteredUsersWines = usersWines.filter(userWine => userWine.user_id === currentUser.id); 
      console.log(filteredUsersWines) 
    
      const wineWithQuantity = filteredUsersWines
        .filter(userWine => userWine.wine_id === wineId)
        .map(userWine => {
          const wine = wines.find(wine => wine.id === userWine.wine_id);
          return {  wine, id: userWine.id, quantity: userWine.quantity };
         
        } )

     console.log(wineWithQuantity);
     console.log("user wine id " ,wineWithQuantity[0].id)
     console.log('user wine quantity' , wineWithQuantity[0].quantity)

   
     const wineAmount = wineWithQuantity[0].quantity
     const userWineId = wineWithQuantity[0].id
     console.log(wineAmount);
     console.log(userWineId);
       
        const goBack = () => {
          navigate(-1);
          dispatch(clearErrors())
          
        }

    function handleChange(event){
        
        setAmount({
          ...amount, [event.target.name]:event.target.value
           })
           console.log(amount)
         }

        
         function handleEditSubmit (event ){
          event.preventDefault()
           dispatch(clearErrors())

          const editUsersWine = {
           wine_id: wineId,
           quantity: parseInt(amount.quantity)
            }
           console.log(editUsersWine)
           console.log(userWineId)
            dispatch(editCellarWine(userWineId, editUsersWine, users, currentUser, navigate ))
        
      }
        

  return (
     <Box m={15}>
       <form onSubmit={handleEditSubmit}>
    <TextField
      fullWidth
      id="name"
      name="name"
      label="Name"
      value={showWine.name}
      disabled
    />
     
    <TextField
      fullWidth
      id="vintage"
      name="vintage"
      label="Vintage"
      value={showWine.vintage}
      disabled
    />
     
    <TextField
      fullWidth
      id="region"
      name="region"
      label="Region"
      value={showWine.region}
      disabled
    />   
     
    <TextField
        fullWidth
        id="old_quantiy"
        name="old_quantity"
        label="Quantity"
        value={wineAmount}
        disabled
      />
     
    <TextField
        fullWidth
        id="quantity"
        name="quantity"
        label="Enter New Quantity"
        value={amount.quantity}
        onChange={handleChange}
     />
    <Button color='primary' variant='contained' type='submit'>
       Submit
     </Button>
      
    <Button color='primary' variant='contained'  type="button" onClick={goBack}>
       cancel
     </Button>
     {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
  </form>
    </Box>
  )
}
