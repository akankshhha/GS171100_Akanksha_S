import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './redux/hooks'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const {isAuthenticated} = useAppSelector((state) => state.auth)

  return (
    <>
    <Routes>
      <Route 
        path='/' 
        element = {isAuthenticated ?
                  <Navigate to='/dashboard' /> : 
                  <Login /> 
                  }>

      </Route>
      <Route
        path='/dashboard'
        element= {isAuthenticated ?
          <Dashboard /> : 
          <Navigate to='/' /> 
          }>
        
      </Route>
    </Routes>
    </>
  )
}

export default App
