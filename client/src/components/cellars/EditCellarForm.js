import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { clearErrors, setErrors } from '../actions/errors'
import { Alert, Box, Button, TextField } from '@mui/material'
import { editCellarWine } from '../actions/users'





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
    const { loggedIn } = useSelector(store => store.usersReducer)
    const { currentUser } = useSelector(store => store.usersReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location.state)

    const  wineId = location.state.wineId
        console.log(wineId)
    const userWineId = location.state.userWineId
        console.log(userWineId)
    const wineAmount = location.state.wineAmount
        console.log(wineAmount)
        console.log(users)
        
       


        useEffect(() => {
          if( !loading && !loggedIn) {
            navigate('/login')
          }
          const wine = wines.find(wine => wine.id === parseInt(wineId))
             console.log(wine)
         
          // if( currentUser.id !== wine.user_id) {
          //     navigate('/wines')
          //   }
       setShowWine({
          name: wine.name,
          vintage: wine.vintage,
          region: wine.region
        })
        console.log(showWine)
          // setAmount(wineAmount)  
          
        }, [wines,  loggedIn, wineId, navigate])


        const goBack = () => {
          navigate(-1);
          dispatch(clearErrors())
          // setErrors([])
        }

    function handleChange(event){
        
        setAmount({
          ...amount, [event.target.name]:event.target.value
           })
           console.log(amount)
         }


         function handleSubmit (event ){
          event.preventDefault()
          dispatch(clearErrors())

          const editUsersWine = {
           wine_id: wineId,
           quantity: parseInt(amount.quantity)
            }
           console.log(editUsersWine)
            dispatch(editCellarWine(userWineId, editUsersWine, users, currentUser, navigate ))
         
  
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
     
    <TextField
        fullWidth
        id="old_quantiy"
        name="old_quantity"
        label="quantity"
        value={wineAmount}
        disabled
      />
     
    <TextField
        fullWidth
        id="quantity"
        name="quantity"
        label="enter new quantity"
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
