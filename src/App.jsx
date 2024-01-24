import React from 'react'
import {Route, Routes} from "react-router-dom"
import LoginPage from './pages/loginpage'
import UserDashboard from './pages/userdashboard'
import ProjectDashboard from './pages/projectdashboard'
import ErrorPage from './pages/errorpage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/user-dashboard' element={<UserDashboard />} />
      <Route path='/project-dashboard' element={<ProjectDashboard />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
