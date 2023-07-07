import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const WineCard = ({wine}) => {
 

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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

    </Card>
   
  </div>
  </>
  )
}

export default WineCard