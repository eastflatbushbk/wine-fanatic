import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../actions/errors'
import { Alert, Box, Button, TextField } from '@mui/material'
import { addWine } from '../actions/wines'

 const defaultData = {
      name: "",
      winery: "",
      vintage: "",
      region: "",
      grape: "",
      wine_type: "",
      img_url: "",
     
    }



export default function WineForm() {
   
    const [ newWine, setNewWine ] = useState(defaultData)
    const { errors } = useSelector(store => store.errorsReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch();


    function handleChange(event){
        
        setNewWine({
          ...newWine, [event.target.name]:event.target.value
           })
           console.log(newWine)
         }
      

    const goBack = () => {
            navigate(-1);
       
        dispatch(clearErrors())
        }

        function handleSubmit(event) {
            event.preventDefault();
         
            dispatch(clearErrors())
           console.log(newWine)

         dispatch(addWine(newWine, navigate))

         setNewWine(defaultData)

}

const displayErrors = errors && errors.map( error => <li >{error}</li>)

  return (
    <Box m={15}>
         <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={newWine.name}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="winery"
        name="winery"
        label="Winery"
        value={newWine.winery}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="vintage"
        name="vintage"
        label="Vintage"
        value={newWine.vintage}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="region"
        name="region"
        label="Region"
        value={newWine.region}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="grape"
        name="grape"
        label="Grape"
        value={newWine.grape}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
          fullWidth
          id="wine_type"
          name="wine_type"
          label="Wine Type"
          value={newWine.wine_type}
          onChange={handleChange}
        
      />
    
      &nbsp;
      <TextField
          fullWidth
          id="img_url"
          name="img_url"
          label="Image URL"
          value={newWine.img_url}
          onChange={handleChange}
        
      />
            
     <Button color='primary' variant='contained' type='submit'>
         Submit
       </Button>
       &nbsp;
      <Button color='primary' variant='contained'  type="button" onClick={goBack}>
         cancel
       </Button>
       {displayErrors && displayErrors.length > 0 && (<Alert severity="warning">{displayErrors}</Alert>)}
    </form>
</Box>
  )
}
