import {Outlet, NavLink} from "react-router"

function Technologies() {
  return (
    <div>
      <nav className="p-5">
            <ul className="flex justify-center gap-5 text-[20px]">
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-orange-600 bg-orange-300' : ''} to="/technologies/vue">Vue</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-orange-600 bg-orange-300' : ''} to="/technologies/java">Java</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive? 'text-orange-600 bg-orange-300' : ''} to="/technologies/nodejs">Node.js</NavLink>
                </li>
            </ul>
        </nav>
      <Outlet />
    </div>
  )
}

export default Technologies