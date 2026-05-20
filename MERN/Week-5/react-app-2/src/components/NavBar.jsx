function NavBar() {
    return (
        <div className="flex justify-between bg-gray-600 px-10 py-5 text-white">
            <h1>Logo</h1>
            <ul className="flex gap-10">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">Register</a>
                </li>   
                <li>
                    <a href="/contact">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;