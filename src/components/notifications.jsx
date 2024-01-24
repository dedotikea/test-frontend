import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Notifications = () => {
  return (
    <>
      <Typography variant="h4" color="#FEF8EC" gutterBottom sx={{ textDecoration: 'underline' }}>
        Notifications
      </Typography>
      <Table stickyHeader>
        <TableHead sx={{
         "& th": {
          backgroundColor: "#4A596D",
          color: 'white',
         }
        }}>
          <TableRow>
            <TableCell>Tanggal</TableCell>
            <TableCell>Pemberitahuan</TableCell>
            <TableCell>User</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
          backgroundColor: "#FEF8EC",
        }}>
          <TableRow>
            <TableCell>12-12-2012</TableCell>
            <TableCell>Update Profile Pictured</TableCell>
            <TableCell>rayhangustiar</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11-12-2012</TableCell>
            <TableCell>Change username</TableCell>
            <TableCell>dedotikea</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10-11-2012</TableCell>
            <TableCell>Add new task on Pending</TableCell>
            <TableCell>dedotikea</TableCell>
            <TableCell>
              <Link>
                Project B
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11-12-2012</TableCell>
            <TableCell>Change Project detail</TableCell>
            <TableCell>dedotikea</TableCell>
            <TableCell>
              <Link>
                Project A
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default Notifications