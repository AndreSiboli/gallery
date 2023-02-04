import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import Home from './routes/Home'
import About from './routes/About'
import Error404 from './routes/Error404'
import Contact from './routes/Contact'
import Life from './routes/subpages/Life'
import Fashion from './routes/subpages/Fashion'
import Food from './routes/subpages/Food'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/gallery',
    element: <App />,
    children: [
      {
        path: '/gallery',
        element: <Home />
      },
      {
        path: '/gallery/about',
        element: <About />
      },
      {
        path: '/gallery/contact',
        element: <Contact />
      },
      {
        path: '/gallery/life',
        element: <Life />
      },
      {
        path: '/gallery/fashion',
        element: <Fashion />
      },
      {
        path: '/gallery/food',
        element: <Food />
      },
      {
        path: '*',
        element: <Error404/>
      }
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
