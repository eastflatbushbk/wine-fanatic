import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import WineBarIcon from '@mui/icons-material/WineBar';

import React from 'react'
import { useSelector } from 'react-redux';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function UsersCard({user}) {
    const { currentUser } = useSelector(store => store.usersReducer)
    console.log(currentUser)
    console.log(user)
    console.log(currentUser.id)


    const capitalized = user.username.charAt(0).toUpperCase() 
          console.log(capitalized);


          const displayEditbtns = currentUser.id === user.id ? (
            <>
            {/* to do : ability for user to edit profile */}
             {/* <Tooltip title="Edit user info">
                            <IconButton aria-label="edit" >
                                <EditRoundedIcon />
                            </IconButton>
                    </Tooltip> */}
                </>
            ):(null)

            // function handleClick (){
            //     console.log("cellar btn clicked")
            // }

  return ( 
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
             {capitalized}
          </Avatar>
        }
        action={
             <CardActions>
                {displayEditbtns}
             </CardActions>
        }
        title={user.username}
        subheader={user.age}
      />
    
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
        favorite varietal :  {user.favorite_varietal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Location : {user.location}
        </Typography>
      </CardContent>
{/* onClick={handleClick} */}
      <CardActions disableSpacing >
      <Link to={`/cellars/${user.id}`}>
       <Tooltip title="view user's cellar">
        <IconButton aria-label="add to favorites" >
          < WineBarIcon />
        </IconButton>
        </Tooltip>
         </Link>
        </CardActions>
  </Card>
  )
}
