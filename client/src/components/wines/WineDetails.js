import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia,  Grid,  IconButton, Stack, Tooltip, Typography} from '@mui/material'
import { postReview } from '../actions/wines';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { red } from '@mui/material/colors';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewCard from '../reviews/ReviewCard';
import { clearErrors } from '../actions/errors';
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function WineDetails() {
    const  [formBtn, setFormBtn] = useState(false)
    const  [showForm , setShowForm] = useState(true)
    const [newComment , setNewComment] = useState("")
    const navigate = useNavigate()
    const { errors } = useSelector(store => store.errorsReducer)
    const  wines  = useSelector(store => store.winesReducer)
    const  cellarWines  = useSelector(store => store.usersWinesReducer)
    const { currentUser } = useSelector(store => store.usersReducer)
    console.log(currentUser)
    console.log(currentUser.id)
    console.log(wines)
    console.log(cellarWines)
    console.log(errors)
    const dispatch = useDispatch();
    const wineId = parseInt(useParams().id)

       
    const wineObj = wines.find(w => w.id === wineId)
          console.log(wineObj)

         
          const firstLetter = wineObj.author.username
          const capitalized = firstLetter.charAt(0).toUpperCase() 
          console.log(capitalized);
            
   
  function handleCellarClick(wineId) {
    console.log("edit clicked")
                   
      navigate("/add_to_cellar", { state: { wineId: wineId } });
             
  }
              

const content = wineObj.reviews.map( rev => <ReviewCard key={rev.id} rev={rev} wineObj={wineObj} />) 


    const showBtn = formBtn ?(
        <IconButton aria-label="write a review" onClick={handleChat}>
                            <RateReviewRoundedIcon />
                       </IconButton>
              
       ):(null)


    function handleForm () {
        setShowForm(false)
        setNewComment("")
        dispatch(clearErrors())
       
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
    // useEffect(() => {
    //     setNewComment("");
    //   }, [wineObj]);

    function handleCommentSubmit(event) {
        event.preventDefault();
    
    dispatch(clearErrors())
        console.log('review submitted')
      
        const createReview = {
            comment: newComment.comment,
            user_id: currentUser.id,
            wine_id: wineId
           }
                                        
          dispatch(postReview(createReview,wineObj))
      
          handleForm ()
        //  handleChat ()
        

       
    }
    
    

    const displayButtons = currentUser.id === wineObj.user_id ? (
        <>
                   <Tooltip title="Edit post">
                            <IconButton aria-label="edit" onClick={() => handleEdit(wineObj.id)}>
                                <EditRoundedIcon />
                            </IconButton>
                    </Tooltip>
      
        </>
       ) :(null) 

    const displayForm = showForm ? (
      

        
       
         <form action="/html/tags/html_form_tag_action.cfm" method="post" onSubmit={handleCommentSubmit} >
                <textarea name="comment"  value={newComment.comment} onChange={handleChange} style={{width:"100%",height:"90px",padding:"2%",font:"1.4em/1.6em cursive", backgroundcolor:"gold", color:"green"}}>

                </textarea>
        
                    {errors && errors.length > 0 && (<Alert severity="warning">{errors}</Alert>)}
          
          <Button type="submit" color='primary'>submit</Button>
       
          <Button color='primary' onClick={handleForm}  type="button">cancel</Button>
      </form> 
       
     
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

        <Tooltip title="add to cellar">
                                <IconButton aria-label="add to cellar" onClick={() => handleCellarClick(wineId) }>
                                        <AddBoxIcon />
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
