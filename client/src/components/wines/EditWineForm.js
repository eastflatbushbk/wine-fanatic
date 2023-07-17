import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearErrors, setErrors } from '../actions/errors';


const defaultData = {
    name: "",
    winery: "",
    vintage: "",
    region: "",
   grape: "",
    wine_type: "",
    img_url: ""
    }

export default function EditWineForm({loading}) {
    const [ modifiedWine, setModifiedWine ] = useState(defaultData)

    const wines  = useSelector(store => store.winesReducer)
    console.log(wines)
    const { currentUser, loggedIn } = useSelector(store => store.usersReducer)
    const { errors } = useSelector(store => store.errorsReducer)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

    const id = location.state.id
        console.log(id)



        useEffect(() => {
            if( !loading && !loggedIn) {
              navigate('/login')
            }
            const wine = wines.find(wine => wine.id === parseInt(id))
               console.log(wine)
           
            if( currentUser.id !== wine.user_id) {
                navigate('/wines')
              }
         setModifiedWine({
            name: wine.name,
            winery: wine.winery,
            vintage: wine.vintage,
            region: wine.region,
            grape: wine.grape,
            wine_type: wine.wine_type,
            img_url: wine.img_url
          })
          console.log(modifiedWine)
              
            
          }, [wines,  loggedIn, currentUser, id, navigate])








        // const wine = wines.find(wine => wine.id === parseInt(id))
        // console.log(wine)

        // setModifiedWine({
        //     name: wine.name,
        //     winery: wine.winery,
        //     vintage: wine.vintage,
        //     region: wine.region,
        //     grape: wine.grape,
        //     wine_type: wine.wine_type,
        //     img_url: wine.img_url
        //   })
        //   console.log(modifiedWine)

          function handleChange (event){
            setModifiedWine({
                ...modifiedWine, [event.target.name]:event.target.value
               })
        }
       

        const goBack = () => {
            navigate(-1);
            dispatch(clearErrors())
            // setErrors([])
          }

    function handleSubmit (event ){
        event.preventDefault()
        dispatch(clearErrors())

        fetch(`/wines/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(modifiedWine)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(editedWine => {
                    //  patchMatch(editedWine)
                    console.log(editedWine)
                    const action = ({ type: "UPDATE_WINE", payload: editedWine })
                     dispatch(action)
                     setModifiedWine(defaultData)
                    
                     navigate('/wines')
                })
           } else {
               resp.json().then(errors => {
                    // setErrors(errors.error)
                    dispatch(setErrors(errors))
               })
           }
        })

    }


  return (
    <Box m={15}>
         <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={modifiedWine.name}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="winery"
        name="winery"
        label="Winery"
        value={modifiedWine.winery}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="vintage"
        name="vintage"
        label="Vintage"
        value={modifiedWine.vintage}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="region"
        name="region"
        label="Region"
        value={modifiedWine.region}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
        fullWidth
        id="grape"
        name="grape"
        label="Grape"
        value={modifiedWine.grape}
        onChange={handleChange}
        
      />
      &nbsp;
      <TextField
          fullWidth
          id="wine_type"
          name="wine_type"
          label="Wine Type"
          value={modifiedWine.wine_type}
          onChange={handleChange}
        
      />
      &nbsp;
      <TextField
          fullWidth
          id="img_url"
          name="img_url"
          label="Image URL"
          value={modifiedWine.img_url}
          onChange={handleChange}
        
      />
        {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
      <Button color='primary' variant='contained' type='submit'>
         Submit
       </Button>
       &nbsp;
      <Button color='primary' variant='contained'  type="button" onClick={goBack}>
         cancel
       </Button>
    </form>
</Box>
    
  )
}
