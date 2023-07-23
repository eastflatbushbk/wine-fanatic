import React from 'react'
import wineglasses from '../images/wineglasses.jpg'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box m={8}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div >
         <h3 >Welcome to Wine-Fanatic </h3>
         <img  src={wineglasses} style={{ margin: 'auto', width: '80%' }} alt='wineglasses'/>
        
         </div>
    </div>
    </Box>
  )
}

