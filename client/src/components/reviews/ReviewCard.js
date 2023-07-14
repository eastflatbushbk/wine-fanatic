import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import { Avatar, Box, CardActions,  IconButton, Stack, Tooltip, Typography } from '@mui/material';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pink } from '@mui/material/colors';
import { clearErrors } from '../actions/errors';

export default function ReviewCard({wineObj, rev}) {
    const dispatch = useDispatch();
  console.log(wineObj)
  console.log(rev)
  console.log(rev.user_id)
    // current user
    const { currentUser } = useSelector(store => store.usersReducer)
    console.log(currentUser)
    console.log(currentUser.id)
    // update wine

    const firstLetter = rev.username.charAt(0).toUpperCase() 
          console.log(firstLetter);


    
    const navigate = useNavigate()

    function handleEdit(id , wine_id) {
        console.log(id)
        console.log(wine_id)
        dispatch(clearErrors())
         navigate('/edit_review',{state:{id:id,wine_id:wine_id}})
    }

    function handleDelete(id) {
        console.log(id)
        dispatch(clearErrors())
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        })
              
        const wineWithReviewRemoved = wineObj.reviews.filter( r => r.id !== id )
        
        const updatedwine = {...wineObj, reviews: wineWithReviewRemoved}
        
        // patchMatch(updatedMatch)
        const action = ({ type: "UPDATE_WINE", payload: updatedwine })
               
        dispatch(action)
               
        } 

    const displaybtns = currentUser.id === rev.user_id ? (
        <>
        {/* <button type="button" onClick={() => handleEdit(com.id, matchObj.id)} className="btn btn-primary  btn-sm">edit</button>
        &nbsp;
        <button type="button" onClick={() => handleDelete(com.id)} className="btn btn-secondary  btn-sm">delete</button> */}
        <Stack direction="row" spacing={2}>
                    <Tooltip title="edit review">
                            <IconButton aria-label="edit review" onClick={() => handleEdit(rev.id, wineObj.id)}>
                                   <EditNoteRoundedIcon />
                            </IconButton>
                   </Tooltip>
                   <Tooltip title="delete review">
                            <IconButton aria-label="delete review" onClick={() => handleDelete(rev.id)}>
                                   <DeleteRoundedIcon />
                            </IconButton>
                   </Tooltip>
            </Stack>
        </>
    ):(null)

  return (
    
         <Box m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card elevation={2} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardHeader
               avatar={
                 <Avatar sx={{ bgcolor: pink[200] }} aria-label="review">
                    {firstLetter}
                 </Avatar>
                 }
                 action={
                     <CardActions disableSpacing sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end'  }}>
                    {displaybtns}
                    </CardActions>
                 }
                      title={rev.username}
                   />
                  
                    </Box>
                 <CardContent>
                    <Typography variant='body2' color="textSecondary">
                       {rev.comment}
                    </Typography>
                 </CardContent>
            
       
        </Card>
        </Box>
    
  )
}
