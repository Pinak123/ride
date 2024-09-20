import { Outlet } from 'react-router-dom'
import NavbarComp from './components/Navbar'

function Layout() {
  return (
    <>
      <NavbarComp/>
      <Outlet/>
      
    </>
  )
}

export default Layout
