import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Settings = () => {
  return (
    <>
      <Typography variant="h4" color="#FEF8EC" gutterBottom sx={{ textDecoration: 'underline' }}>
        Settings
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'space-around',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: "space-evenly",
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <AccountCircleIcon sx={{ fontSize: "150px", color: "white" }} />
            <Button variant='contained' sx={{
              backgroundColor: "#FEF8EC",
              color: 'black',
              margin: '10px',
              ':hover': {
                bgcolor: '#DCD6CD',
                color: 'black',
              }
            }}>Change profile picture</Button>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: "100%",
            justifyContent: "end",
          }}>
            <Typography color="white"> Username : rayhangustiar</Typography>
            <Button variant='outlined' sx={{
              backgroundColor: "#FEF8EC",
              color: 'black',
              margin: '10px',
              ':hover': {
                bgcolor: '#DCD6CD',
                color: 'black',
              }
            }}>Change username</Button>
          </Box>

        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography color='white' align='justify'> Bio : consectetur adipiscing elit. Donec leo nibh, luctus nec
            porta sit amet,  vestibulum vitae urna. Quisque dolor purus,
            efficitur at mi in, posuere  sollicitudin nisl. Ut eu fermentum ex. </Typography>
          <Button variant='outlined' sx={{
            backgroundColor: "#FEF8EC",
            color: 'black',
            margin: '10px',
            ':hover': {
              bgcolor: '#DCD6CD',
              color: 'black',
            }
          }}>Change Bio</Button>
        </Box>
      </Box>

    </>
  )
}

export default Settings