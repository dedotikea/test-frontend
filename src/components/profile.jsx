import React from 'react'
import { Box, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
  return (
    <>
      <Typography variant="h4" color="#FEF8EC" gutterBottom sx={{ textDecoration: 'underline' }}>
        Profile
      </Typography>
      <Box>
        <AccountCircleIcon sx={{
          fontSize: "150px",
          color: "white",
        }} />
        <Typography component="h3" color="white" align='justify'>
          Username: {"{Nama User}"} <br />
          Email: {"{Email User}"}<br />
          Account Created at: {"{Timestamps}"}<br />
          Bio: {"{Bio singkat User}"}<br />
        </Typography>
      </Box>
    </>
  )
}

export default Profile