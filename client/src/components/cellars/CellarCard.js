import { Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CommentIcon from '@mui/icons-material/Comment';

export default function CellarCard({wine}) {
    
    console.log(wine)
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
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <Link to={`/wines/${wine.id}`}>
            <Tooltip title="see reviews">
             <IconButton aria-label="see reviews" >
                             <CommentIcon />
                        </IconButton>
                       </Tooltip>
                </Link>
    
          
      </CardActions>

    </Card>
  )
}
