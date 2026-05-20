import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router"

function Root_Layout() {
  return (
    <div>
        <Header />
        {/* {placeholder} */}
        <div className="min-h-screen mx-16 bg-amber-200">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Root_Layout