import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import ParaComp from './Components/ParaComp';

const router = createBrowserRouter(
  [
    {
      path:"/:id",
      element:
      <div>
        <Navbar/>
       <Home />
       </div>
      
    },
    {
      path:"/about",
      element:
        <div>
        <Navbar/>
      <About/>
       </div>
    },
    {
      path:"/dashboard",
      element:
        <div>
        <Navbar/>
      <Dashboard />
       </div>,
      children:[{
        path:'courses',
       
      },
      
        
      
      
    ]
       
    }
    ,
    {
      path:"/student/:id",
      element:
        <div>
        <Navbar/>
        <ParaComp/>
      <Dashboard />
       </div>
       
    }
  ]
)




function App() {


  return (
    <>
 
   
     <RouterProvider router={router} />
    </>
  )
}

export default App
