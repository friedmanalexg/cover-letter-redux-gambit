import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Blocks from './components/Blocks'
import Home from './components/Home'
import { NotFound, Root } from './components/landing'
import Letters from './components/Letters'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import { getCurrentUser } from './features/userSlice'
import { AuthRoute } from './tools/hooks'
import './styles.css'


const App = () => {
  const { user, isLoading } = useSelector(state => state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentUser());
   
  }, [dispatch]);

  




  if (isLoading) {
    return (
      <>
      <p>"Loading"</p>
      </>
    );
  }
  return (
    <>
      <NavBar />

      <Routes>
        
        <Route index element={<Root />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/me" element={
          <AuthRoute user={user}>
            <Home />
          </AuthRoute>
        } />
        <Route path='/blocks' element={
          <AuthRoute user={user}>
            <Blocks />
          </AuthRoute>
        } />
        <Route path='/letters' element={
          <AuthRoute user={user}>
            <Letters />
          </AuthRoute>  
        } />
        <Route path="/logout" element={
          <AuthRoute user={user}>
            <Logout />
          </AuthRoute>
        } />
        <Route path='*' element={<NotFound />} />
       

      </Routes>
    </>
  )
}

export default App