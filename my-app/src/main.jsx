import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Link, NavLink, Outlet, useParams, useLoaderData } from "react-router-dom"; 
import BookProvider from './context/BookContext'
import { ToastContainer } from 'react-toastify'
import router from './routes/Routes'
import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}/>
    
    </BookProvider>
  </StrictMode>,
)
