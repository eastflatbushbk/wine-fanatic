import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Tooltip } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import { addToUsersWines } from '../actions/users';



const WineCard = ({wine}) => {

  // const [inCellar, setInCellar] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
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

  // for (const key in currentUser.users_wines) {
  //   if (wine.id === currentUser.users_wines[key].wine_id) {
  //     setInCellar(true)
  //   }
  // }
  // currentUser.users_wines.forEach(userWine => {
  //   wine.forEach(wine => {
  //     if (wine.id === userWine.wine_id) {
  //       setInCellar(true)
  //     }
  //   });
  // });
    
  //  let wineAmount;
  // useEffect(() => {
   
  //    currentUser.users_wines.map(userWine =>  {
  //             if (wine.id === userWine.wine_id) {
  //                 //  handleState()
                
  //                   setInCellar(!inCellar)
                    
                    
                    
  //                 } else {
  //             setInCellar(false)
  //         } 
  //      });
  //     }, []);
  // function handleState () {} 
  // let wineAmount;
  //   let userWineId;
  // function handleEditClick(wineId) {
  //   console.log("edit clicked")
    
  //   currentUser.users_wines.map(userWine =>  {
  //     if (wine.id === userWine.wine_id) {
  //          const wineAmount = userWine.quantity
  //          const userWineId = userWine.id;
                
  //           console.log(userWineId);
  //           console.log(wineAmount);
  //           navigate("/edit_userswine", { state: { wineId: wineId, userWineId: userWineId, wineAmount: wineAmount } });
   
  //     }})
  //     // outside :
  //     console.log(userWineId);
  //     console.log(wineAmount);
    
  // }
  
  // const  showButton = inCellar ? (
          
  //   <Tooltip title="Edit amount in cellar"onClick={() => handleEditClick(wine.id)}>
  //   <IconButton aria-label="edit ammount">
  //          <BookmarkAddedRoundedIcon />
  //   </IconButton>
  //   </Tooltip>
  // ):(  
  //   <Tooltip title="Add to cellar">
  //                       <IconButton aria-label="add to cellar" onClick={() => dispatch(addToUsersWines(wine.id))}>
  //                              <BookmarkAddRoundedIcon />
  //                       </IconButton>
  //              </Tooltip>
  // ) 

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
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <Link to={`/wines/${wine.id}`}>
              {displayButton}
                </Link>
    
       {/* {showButton} */}
      </CardActions>

    </Card>
   
  </div>
  </>
  )
}

export default WineCard