import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';


export default function CellarCard({wine , filteredUsersWines}) {
  
  const { currentUser } = useSelector(store => store.usersReducer)
  const  usersWines  = useSelector(store => store.usersWinesReducer)
  console.log(usersWines)
  const dispatch = useDispatch();
  const navigate = useNavigate()
    
    console.log(wine)

    const userWines = filteredUsersWines.filter(userWine => userWine.wine_id === wine.id);
const userWineIds = userWines.map(userWine => userWine.id);
console.log("users_wines.id",userWineIds)
const userWineUserIds = userWines.map(userWine => userWine.user_id);
 console.log("users_wines.user_id",userWineUserIds)
 console.log(parseInt(userWineUserIds))
 console.log(currentUser.id)
 console.log(filteredUsersWines)

    function handleCellarFormClick(wineId) {
      console.log("edit clicked")
      console.log("wine id", wineId)
      
         navigate("/edit_userswine", { state: { wineId: wineId , userId: userWineUserIds } });
           
    }
  function handleDelete(id) {
    console.log(id)
    // dispatch(clearErrors())
    fetch(`/users_wines/${id}`, {
        method: "DELETE"
    })
       
    const action = ({ type: "DELETE_USERS_WINES", payload: id })
           
    dispatch(action)
    
  }

  const displaybtn = (parseInt(userWineUserIds) === currentUser.id ) ? (
      <Grid>
         <Tooltip title="go to cellar form">
                      <IconButton aria-label="go to cellar form" onClick={() => handleCellarFormClick(wine.id)}>
                                    <BookmarkBorderIcon />
                      </IconButton>
        </Tooltip>
         <Tooltip title="remove from cellar">
                                <IconButton aria-label="remover from cellar" onClick={() => handleDelete(parseInt(userWineIds))}>
                                       <DeleteIcon />
                                </IconButton>
                 </Tooltip>
          </Grid>
):(null) 


  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={wine.img_url}
        title="wine bottle"
        style={{width:"90%", float:"center"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {wine.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {wine.region}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.secondary" style={{ color: 'red' }}>
         {wine.quantity} in stock 
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link to={`/wines/${wine.id}`}>
            <Tooltip title="see reviews">
             <IconButton aria-label="see reviews" >
                             <CommentIcon />
                        </IconButton>
                       </Tooltip>
                </Link>
                {displaybtn}
                
          
      </CardActions>

    </Card>
  )
}
