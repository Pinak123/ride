import { Outlet } from 'react-router-dom'
import BottomNavbar from './components/FootNavbar'

function Layout() {
  return (
    <>
      
      <Outlet/>
      <BottomNavbar/>
    </>
  )
}

export default Layout
