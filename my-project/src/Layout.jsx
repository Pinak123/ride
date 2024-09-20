import { Outlet } from 'react-router-dom'
import NavbarComp from './components/Navbar'
import FootNav from './components/FootNavbar'

function Layout() {
  return (
    <>
      <NavbarComp/>
      <Outlet/>
      <FootNav/>
    </>
  )
}

export default Layout
