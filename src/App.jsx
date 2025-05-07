import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';



import './App.css'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import { RouterProvider, createBrowserRouter } from 'react-router'


function App() {
  const [count, setCount] = useState(0)
const routs=createBrowserRouter([
  {
  path:'/',
  element:<MasterLayout/>,
  children:[
    {index:true,element:<Home/>},
    {path:"Home", element:<Home/>},
    {path:"About", element:<About/>},
    {path:"Skills", element:<Skills/>},
    {path:"Experience", element:<Experience/>},
    {path:"Work", element:<Work/>}
  ]
  }
])
  return (
    <>
    <RouterProvider router={routs}></RouterProvider>
    

      </>
  )
}

export default App
