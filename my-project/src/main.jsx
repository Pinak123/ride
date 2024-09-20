import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import 'bootstrap/dist/css/bootstrap.css';


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/DashboardComponent.jsx'
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      
      {
        path: "",
        element: <Dashboard/>
      },
      {
        path: "lg",
        element: <Login/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
