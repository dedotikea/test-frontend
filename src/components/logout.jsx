import React from 'react'
import { Box, Button, Typography } from '@mui/material'


const Logout = () => {
  return (
    <>
      <Typography variant="h4" color="white" gutterBottom sx={{ textDecoration: 'underline' }}>
        Logout
      </Typography>

      <Box sx={{
        // minWidth: "80vw",
        // width: "100%",
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Typography variant='h6' color="white">
          Silahkan pilih ya untuk logout
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
        }}>

          <Button variant='contained' sx={{
            backgroundColor: "#FEF8EC",
            color: 'black',
            margin: '10px',
            ':hover': {
              bgcolor: '#DCD6CD',
              color: 'black',
            }
          }}>Ya</Button>
          <Button variant='contained' sx={{
            backgroundColor: "#FEF8EC",
            color: 'black',
            margin: '10px',
            ':hover': {
              bgcolor: '#DCD6CD',
              color: 'black',
            }
          }}>Tidak</Button>
        </Box>
      </Box>
    </>
  )
}

export default Logout