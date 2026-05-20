import {NavLink} from "react-router"
function Header() {
  return (
    <div>
        <nav className="p-5">
            <ul className="flex justify-end gap-5 text-[20px]">
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-blue-600 bg-blue-300' : ''} /*className="hover:underline hover:bg-amber-100"*/ to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-blue-600 bg-blue-300' : ''} to="/register">Register</NavLink>
                    {/* the to = "/register" should be same as the same path used on the route in App.jsx */}
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-blue-600 bg-blue-300' : ''} to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink className="hover:underline hover:bg-amber-100" to="/technologies">Technologies</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header