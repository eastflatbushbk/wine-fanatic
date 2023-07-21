import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Tooltip } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
// import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
// import { addToUsersWines } from '../actions/users';



const WineCard = ({wine}) => {

  

  const {  loggedIn } = useSelector(store => store.usersReducer)
  // const { currentUser } = useSelector(store => store.usersReducer)
  // const { users } = useSelector(store => store.usersReducer)
  // console.log(users)
  // console.log(currentUser)
  // console.log(wine.id)
  // console.log(wine)
  // const activeUser = users.find(user => user.id === currentUser.id);
  // console.log(activeUser)
  // console.log(activeUser.users_wines)

 

  const displayButton = loggedIn ? (
    <>
               <Tooltip title="see reviews">
             <IconButton aria-label="see reviews" >
                             <CommentIcon />
                        </IconButton>
                       </Tooltip> 
  
    </>
   ) :(null) 
     

  return (

    <>
    <div>
    

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
      </CardContent>
      <CardActions>
       
        <Link to={`/wines/${wine.id}`}>
              {displayButton}
                </Link>
    
      
      </CardActions>

    </Card>
   
  </div>
  </>
  )
}

export default WineCard