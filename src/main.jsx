import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './Component/Contact.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Me from './Component/Me.jsx'
import Technology from './Component/Technology.jsx'
import Project from './Component/Project.jsx'
import Profile from './Component/Profile.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "project",
        element : <Project/>
      },
      {
        path : "",
        element : <Me/>
      },
      {
        path : "/profile",
        element : <Profile/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
