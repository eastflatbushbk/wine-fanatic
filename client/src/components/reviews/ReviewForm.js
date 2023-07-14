import React, { useEffect, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, setErrors } from '../actions/errors';
import { Alert, Box } from '@mui/material';



const defaultData = {
  comment: "",
  wine_id: "",
  user_id: ""
  }

export default function ReviewtForm() {
  const [editedReview , setEditedReview] = useState(defaultData)

   const  wines  = useSelector(store => store.winesReducer)
    console.log(wines)
   const { currentUser, loggedIn } = useSelector(store => store.usersReducer)
    const { errors } = useSelector(store => store.errorsReducer)

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location.state)
  const id = location.state.id
  const wine_id = location.state.wine_id
     console.log(id)
     console.log(wine_id)

     useEffect(() => {
      if( !loggedIn) {
        navigate('/login')
      }
      
      const wine = wines.find(wine => wine.id === parseInt(wine_id))
      const review = wine.reviews.find(review => review.id === parseInt(id))
     
      if( currentUser.id !== review.user_id) {
          navigate('/wines')
        }
       
        setEditedReview({
          comment: review.comment,
          wine_id: review.wine_id,
          user_id: review.user_id
        })
      
    }, [wines, loggedIn, currentUser, id, wine_id, navigate])


    const goBack = () => {
      navigate(-1);
      // setErrors([])
      }


    function handleChange(event){
        
      setEditedReview({
        ...editedReview, [event.target.name]:event.target.value
       
      })
      
     }

     function handleSubmit (event ){
      event.preventDefault()
      // setErrors([])
      dispatch(clearErrors())
     console.log('review form submited ')

      fetch(`/reviews/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(editedReview)
      })
      .then(resp => {
         if (resp.ok) {
              resp.json().then(modifiedReview => {

                  const copyOfWines = [...wines]
                   
                  const wineToUpdate = copyOfWines.find(wine => wine.id === modifiedReview.wine.id)
                
                  const reviewToUpdate = wineToUpdate.reviews.find( rev => rev.id === modifiedReview.id )

                  const idx = wineToUpdate.reviews.indexOf(reviewToUpdate)
               
                  delete modifiedReview.wine ;
                 
                  wineToUpdate.reviews.splice(idx, 1, modifiedReview)
                
                  // patchMatch(matchToUpdate)
                  const action = ({ type: "UPDATE_WINE", payload: wineToUpdate })
                  dispatch(action)
                 
                  setEditedReview(defaultData)
                  
                   navigate(`/wines/${wine_id}`)
              })
         } else {
             resp.json().then(errors => {
                  console.log(errors)
                  //  setErrors(errors.errors)
                  dispatch(setErrors(errors))
             })
         }
      })

  }


    
  return (
    <Box m={15}>
    <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleSubmit}>
  <TextareaAutosize
    name="comment"
    value={editedReview.comment}
    onChange={handleChange}
    style={{
      width: '96%',
      height: '90px',
      padding: '2%',
      fontSize: '1.4em',
      lineHeight: '1.6em',
      backgroundColor: 'light grey',
      color: 'green'
    }}
  />
  {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
  <Button variant="contained" color="primary" type="submit">Submit</Button>
   
  <Button variant="contained" color="primary" onClick={goBack}>Cancel</Button>
</form>
</Box>
  )
}
