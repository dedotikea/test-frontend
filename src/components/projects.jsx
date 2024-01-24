import React, { useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'


const Projects = () => {
  const [open, setOpen] = useState(false)
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)
  const handleOpenCreateProjectModal = () => setOpenCreateProjectModal(true)
  const handleCloseCreateProjectModal = () => setOpenCreateProjectModal(false)

  return (
    <>

      <Typography variant="h4" color="#FEF8EC" gutterBottom sx={{ textDecoration: 'underline' }}>
        Projects
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'auto',
      }}>

        <Button variant='contained' onClick={handleOpenModal} sx={{
          backgroundColor: "#FEF8EC",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#DCD6CD',
            color: '#313435',
          }
        }}>Project A</Button>

        <Button variant='contained' onClick={handleOpenModal} sx={{
          backgroundColor: "#FEF8EC",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#DCD6CD',
            color: '#313435',
          }
        }}>Project B</Button>
        <Button variant='contained' onClick={handleOpenModal} sx={{
          backgroundColor: "#FEF8EC",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#DCD6CD',
            color: '#313435',
          }
        }}>Project C</Button>

        <Button variant='contained' onClick={handleOpenModal} sx={{
          backgroundColor: "#FEF8EC",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#DCD6CD',
            color: '#313435',
          }
        }}>Project D</Button>

        <Button variant='contained' onClick={handleOpenModal} sx={{
          backgroundColor: "#FEF8EC",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#DCD6CD',
            color: '#313435',
          }
        }}>Project E</Button>
        <Modal
          open={open}
          // onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "50%",
            height: "70%",
            bgcolor: '#1A2E4E',
            border: '2px solid #000',
            p: 4,
          }}>
          <Box>
            <Typography id="modal-modal-title" component="h2" sx={{ color: "white" }}>
              test modal project - title
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: 'white' }}>
              test modal project - desc content: Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button variant='contained' sx={{
              backgroundColor: "white",
              color: '#313435',
              margin: '10px',
              ':hover': {
                bgcolor: '#AAB7C0',
                color: '313435',
              }
            }}>
              View Project on Project Dashboard
            </Button>
            <Button onClick={handleCloseModal} variant='contained' sx={{
              backgroundColor: "white",
              color: '#313435',
              margin: '10px',
              ':hover': {
                bgcolor: '#AAB7C0',
                color: '313435',
              }
            }}>
              Close
            </Button>
          </Box>
        </Modal>

      </Box>
      <Box sx={{
        display: "flex",
        marginTop: "100px",
        width: "100%",
        justifyContent: "space-evenly",
      }}>
        <Button variant='contained' onClick={handleOpenCreateProjectModal} sx={{
          backgroundColor: "white",
          color: '#313435',
          margin: '10px',
          ':hover': {
            bgcolor: '#AAB7C0',
            color: '313435',
          }
        }}>Create New Project</Button>
        <Modal
          open={openCreateProjectModal}
          // onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "50%",
            height: "70%",
            bgcolor: '#1A2E4E',
            border: '2px solid #000',
            p: 4,
          }}>
          <Box>
            <Typography id="modal-modal-title" component="h2" sx={{ color: "white" }}>
              test modal create project - title
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: 'white' }}>
              test modal create project - desc content: Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button variant='contained' sx={{
              backgroundColor: "white",
              color: '#313435',
              margin: '10px',
              ':hover': {
                bgcolor: '#AAB7C0',
                color: '313435',
              }
            }}>
              Create
            </Button>
            <Button onClick={handleCloseCreateProjectModal} variant='contained' sx={{
              backgroundColor: "white",
              color: '#313435',
              margin: '10px',
              ':hover': {
                bgcolor: '#AAB7C0',
                color: '313435',
              }
            }}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default Projects