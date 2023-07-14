import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia,  Container,  Grid,  IconButton, Stack, TextField, Tooltip, Typography} from '@mui/material'

import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { red } from '@mui/material/colors';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewCard from '../reviews/ReviewCard';
import { clearErrors, setErrors } from '../actions/errors';
// import { ClassNames } from '@emotion/react';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//         field: {
//             marginTop: 10,
//             marginBottom: 10,
//             display: 'block'
//         }
//     })


export default function WineDetails() {
    const  [formBtn, setFormBtn] = useState(false)
    const  [showForm , setShowForm] = useState(true)
    const [newComment , setNewComment] = useState("")
    // const classes = useStyles()
    const navigate = useNavigate()
    const { errors } = useSelector(store => store.errorsReducer)
    const  wines  = useSelector(store => store.winesReducer)
    const { currentUser } = useSelector(store => store.usersReducer)
    console.log(currentUser)
    console.log(currentUser.id)
    console.log(wines)
    console.log(errors)
    const dispatch = useDispatch();

    const wineId = parseInt(useParams().id)


    const wineObj = wines.find(w => w.id === wineId)
          console.log(wineObj)

         
          const firstLetter = wineObj.author.username
          const capitalized = firstLetter.charAt(0).toUpperCase() 
          console.log(capitalized);

//           const currentDate = new Date();
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const month = monthNames[currentDate.getMonth()];
// const day = currentDate.getDate();
// const year = currentDate.getFullYear();
// console.log(`${month} ${day}, ${year}`);
// const today = `${month} ${day}, ${year}`;
// console.log(today)

         

const content = wineObj.reviews.map( rev => <ReviewCard key={rev.id} rev={rev} wineObj={wineObj} />) 


    const showBtn = formBtn ?(
        <IconButton aria-label="write a review" onClick={handleChat}>
                            <RateReviewRoundedIcon />
                       </IconButton>
      
        // <button type="button"  className="btn btn-outline-secondary">💬</button>
        
       ):(null)


    function handleForm () {
        setShowForm(false)
        setNewComment("")
        dispatch(clearErrors())
        // setErrors([])
        setFormBtn(true)
      }

      function handleEdit(id) {
        console.log(id)
         navigate('/edit_wine',{state:{id:id}})
    }

      function handleChat () {
        console.log('chat btn clicked')
        setShowForm(true)
        console.log(showForm)
        setFormBtn(false)
        console.log(formBtn)
      }


    function handleChange(event){
        
        setNewComment({
          ...newComment, [event.target.name]:event.target.value
     
        })
        
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
    //     setErrors([])
    dispatch(clearErrors())
        console.log('review submitted')
      
        const createOpinion = {
            comment: newComment.comment,
            user_id: currentUser.id,
            wine_id: wineId
           }
                                         
         fetch("/reviews", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(createOpinion)
      })
      .then(resp => {
         if (resp.ok) {
              resp.json().then(addedReview => {
               
                  const newReviews = [...wineObj.reviews, addedReview]
                  
                  const updatedwine = {...wineObj, reviews: newReviews}
                   console.log(updatedwine)
                     setNewComment("")
                //    patchMatch(updatedMatch)
                const action = ({ type: "UPDATE_WINE", payload: updatedwine })
               
                     dispatch(action)
                    
                 })
         } else {
             resp.json().then(error => {
                //   setErrors(errors.errors)
                dispatch(setErrors(error));
                
                  console.log(error.errors)
                  console.log(error)
             })
         }
      })
       
    }

    const displayButtons = currentUser.id === wineObj.user_id ? (
        <>
                   <Tooltip title="Edit post">
                            <IconButton aria-label="edit" onClick={() => handleEdit(wineObj.id)}>
                                <EditRoundedIcon />
                            </IconButton>
                    </Tooltip>
        {/* <button type="button" onClick={() => handleEdit(matchObj.id)} className="btn btn-outline-secondary">edit match</button>
        &nbsp;
        <button type="button" onClick={() => deleteMatch(matchObj.id)} className="btn btn-outline-danger">delete match</button>
        &nbsp; */}
        </>
       ) :(null) 

    const displayForm = showForm ? (
      

        <>
       
         <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleCommentSubmit} >
      <textarea name="comment"  value={newComment.comment} onChange={handleChange} style={{width:"100%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>
        
        </textarea>
        
        {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
          
          <Button type="submit" color='primary'>submit</Button>
       
          <Button color='primary' onClick={handleForm}  type="button">cancel</Button>
      </form> 
        </>
     
     ):(null)
     



  return (
   
    <Box m={10}>
               <Card sx={{ maxWidth: 750 , display: 'flex', margin: 'auto', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <CardHeader
               avatar={
                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {capitalized}
                 </Avatar>
                 }
               action={
                <CardActions disableSpacing sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end'  }}>
                {displayButtons}
                </CardActions>
                       
                        }
                      title={wineObj.author.username}
                
            />
      <div>
               <CardMedia
                    component="img"
                    style={{ height: 200, width: 350,  float: 'left' }}
        
                    image={wineObj.img_url}
                    alt="wine bottle"
                />
                <CardContent
                       style={{ float: 'right', width: 350 }} >
                   <Typography gutterBottom variant="h5" component="div">
                       {wineObj.winery}
                   </Typography>
                   <Typography gutterBottom variant="h5" component="div">
                         {wineObj.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                       {wineObj.region}
                   </Typography>
                </CardContent>
      </div>
      <CardActions disableSpacing sx={{ mt: 'auto' }}>
        
       
      
        {/* <Stack direction="row" spacing={2}> */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Tooltip title="Add to cellar">
                        <IconButton aria-label="add to cellar">
                               <BookmarkAddRoundedIcon />
                        </IconButton>
               </Tooltip>
               <Tooltip title="Edit amount in cellar">
                        <IconButton aria-label="edit ammount">
                               <BookmarkAddedRoundedIcon />
                        </IconButton>
               </Tooltip>
         </Box>
        {/* </Stack> */}
         <Stack direction="row" spacing={2} style={{ float: 'right' }} >
                 <Tooltip title="write reviews">
                     {showBtn}
                 </Tooltip>
                 
          </Stack>

        
       
        </CardActions>
           
      </Card>
       <Grid>
      {displayForm}
      </Grid>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <li>
      {content}
      </li>
      </Grid>
    </Box>


   
   
    
  )
}
