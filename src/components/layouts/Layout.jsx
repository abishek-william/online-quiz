import { Outlet } from "react-router-dom"
import NavBar from "../common/NavBar"
import Footer from "../common/Footer"
function Layout() {
  return (
    <>
        <NavBar/>
        <main className="container mx-auto px-4 py-8 h-screen">
          <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout