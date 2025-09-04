import { Outlet } from "react-router-dom"
import Navigation from "../component/Navigation"
const RootLayout = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout 
