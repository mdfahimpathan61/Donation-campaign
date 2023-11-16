import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Donation from './Components/Donation/Donation'
import AllLayout from './Components/AllLayout/AllLayout'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AllLayout></AllLayout>,
      children: [
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch("data.json")
        },
        {
          path: "/donation",
          element:<Donation></Donation> 
        }

      ]
    }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

