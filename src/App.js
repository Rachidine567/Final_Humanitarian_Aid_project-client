import React from 'react'
import './App.css'
import Home from './components/homepage/Home'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import CurrentAppeal from './components/current-appeal/Current-Appeal'
import Project from './components/project/Project'
import About from './components/about/About'
import Contact  from './components/contact/Contact'
import Donate from './components/donate/Donate'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Search from './components/search/Search'
import Admin from './components/admin-dashboad/Admin'
import ProfilePage from './components/admin-dashboad/profile-page'
function App(){
  return(
    <div className='body-section'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/current-appeal' element={<CurrentAppeal/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/search' element={<Search/>}></Route>

        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/profile-page' element={<ProfilePage/>}></Route>

        
      </Routes>
      </BrowserRouter>
     

    </div>
  )
}
export default App;