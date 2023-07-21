import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { clearErrors } from '../actions/errors'
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
        console.log('wine id ',wineId)
    // const userWineId = location.state.userWineId
    //     console.log(userWineId)
    // const wineAmount = location.state.wineAmount
    //     console.log(wineAmount)
        console.log(users)
        console.log(currentUser)
        
      //  const wineCheck = currentUser.users_wines.some(userWine => userWine.wine_id === wineId)
      //     console.log(wineCheck)
 
                
      

        useEffect(() => {
          // if( !loading && !loggedIn) {
          //   navigate('/login')
          //   console.log(loading)
          //   console.log(loggedIn)
          // }
         
         const wine = wines.find(wine => wine.id === parseInt(wineId))
             console.log('wine in the form ',wine)
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
          
        }, [])

        const userObj = users.find(u => u.id === currentUser.id)
        console.log('user obj' ,userObj)

      //     let wineWithQuantity
      //     let wineAmount;
      //   let userWineId;

      //   if (wineCheck) {
      //    wineWithQuantity = userObj.users_wines
      //   .filter(userWine => userWine.wine_id === wineId)
      //   .map(userWine => {
      //     const wine = wines.find(wine => wine.id === userWine.wine_id);
      //     return userWine.wine_id === wineId ? {  wine, id: userWine.id, quantity: userWine.quantity } : "wine not in cellar";
         
      //   } ) 
      //       wineAmount = wineWithQuantity[0].quantity
      //        userWineId = wineWithQuantity[0].id 
      //       console.log(wineWithQuantity)
      // }
    
      const wineWithQuantity = userObj.users_wines
        .filter(userWine => userWine.wine_id === wineId)
        .map(userWine => {
          const wine = wines.find(wine => wine.id === userWine.wine_id);
          return {  wine, id: userWine.id, quantity: userWine.quantity };
         
        } )

  console.log(wineWithQuantity);
  //  console.log(wineWithQuantity[0].wine)
   console.log("user wine id " ,wineWithQuantity[0].id)
   console.log('user wine quantity' , wineWithQuantity[0].quantity)
  //  const wineAmount = wineWithQuantity.quantity
   
     const wineAmount = wineWithQuantity[0].quantity
  const userWineId = wineWithQuantity[0].id
console.log(wineAmount);
   console.log(userWineId);
        // let wineAmount;
        // let userWineId;
        // currentUser.users_wines.map(userWine =>  {
        //   if (wineId === userWine.wine_id) {
        //        wineAmount = userWine.quantity
        //        userWineId = userWine.id;
                    
        //         console.log(userWineId);
        //         console.log(wineAmount);
               
        //   }})

        //   console.log(userWineId);
        //   console.log(wineAmount);

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

        
         function handleEditSubmit (event ){
          event.preventDefault()
           dispatch(clearErrors())

          const editUsersWine = {
           wine_id: wineId,
           quantity: parseInt(amount.quantity)
            }
           console.log(editUsersWine)
          //  const activeUser =currentUser.id
           console.log(userWineId)
            dispatch(editCellarWine(userWineId, editUsersWine, users, currentUser, navigate ))
        
      }
      //    function handleSubmit (event ){
      //     event.preventDefault()
      //      dispatch(clearErrors())
      //     //  const activeUser =currentUser.id
      //     //  console.log(activeUser)
      //      dispatch(addToUsersWines(wineId, navigate, currentUser ))
                  
  
      // }
  

  

  return (
     <Box m={15}>
       <form onSubmit={handleEditSubmit}>
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
