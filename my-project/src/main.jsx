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
import SignUp from './components/SignUp.jsx';

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
      },
      {
        path: "signup",
        element: <SignUp/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
