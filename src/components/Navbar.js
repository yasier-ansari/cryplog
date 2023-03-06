import React from 'react'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    // , { path: "/fav", name: "Favorite" }
    const Links = [{ path: "/", name: "Listed" }, { path: "/trending", name: "Trending" }]
    return (
        <nav className=" mt-2 md:mt-4 font-semibold flex text-sm md:text-base justify-between items-center mx-auto space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 max-w-lg p-1 md:p-2 lg:p-3" >
            {Links.map((link, i) => (
                <NavLink key={i} to={link.path} className={({ isActive, isPending }) => { return ` text-white flex justify-center items-center w-full px-2 sm:px-3 md:px-4 mx-auto h-full py-1 md:py-2 transition-all duration-300 ease-in-out ${isActive ? 'bg-purple-600 drop-shadow-lg ' : ' bg-purple-300 dark:bg-[#313131]'} ` }} >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar