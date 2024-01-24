import React from 'react'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <Typography variant="h4" color="#FEF8EC" gutterBottom sx={{ textDecoration: 'underline' }}>
        Home
      </Typography>
      <Typography color="white" align='justify'>
        Selamat datang di web-app project management system. Web-app ini dibuat untuk mempermudah tim dalam mengelola suatu proyek.
        <br />
        Web-app ini dinamakan "Skray", yang merupakan singkatan dari "Skripsi Rayhan". Berikut beberapa petunjuk penggunaan web-app:
        <br />
        <br />
      </Typography>
      <Typography variant='h5' color="white">
        Untuk User-dashboard:
      </Typography>
      <Typography color="white" align='justify'>
        Home: Berisi petunjuk penggunaan web-app <br></br>
        Profile: Keterangan data diri user <br></br>
        Projects: Daftar proyek yang terlibat beserta navigasi ke project-dashboard <br></br>
        Notifications: Berisi pemberitahuan terbaru dan log aktivitas user <br></br>
        Settings: Pengaturan untuk mengubah data user <br></br>
        Logout: Untuk keluar dari akses akun <br /> <br />
      </Typography>
      <Typography variant="h5" color="white">
        Untuk Project-dashboard:
      </Typography>
      <Typography color="white" align='justify'>
        Create Project: Untuk membuat proyek baru <br></br>
        Project {"{Nama Proyek}"}: Halaman utama untuk mengelola proyek <br></br>
        List: Status pengerjaan suatu task <br></br>
        Task: Pekerjaan konkrit untuk membangun proyek <br></br>
        Discussion: Untuk menambahkan diskusi pada suatu task <br></br>
        Add Person: Untuk menambahkan user lain pada proyek
      </Typography>
    </>
  )
}

export default Home