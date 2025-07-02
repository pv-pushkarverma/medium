import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Home } from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />;
          <Route path='/signin' element={ <Signin/> }/>;
          <Route path='/signup' element={ <Signup/> }/>;
          <Route path='/blogs' element={ <Blogs/> }/>
          <Route path='/blog/:id' element={ <Blog/> }/>;
          <Route path='/publish' element={ <Publish/> }/>;
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
