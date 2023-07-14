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



const WineCard = ({wine}) => {

  const {  loggedIn } = useSelector(store => store.usersReducer)

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
    

      </CardActions>

    </Card>
   
  </div>
  </>
  )
}

export default WineCard