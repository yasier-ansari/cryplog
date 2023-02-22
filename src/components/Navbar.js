import React from 'react'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    const Links = [{ path: "/", name: "Listed" }, { path: "/trending", name: "Trending" }, { path: "/fav", name: "Favorite" }]
    return (
        <nav className=" mt-6 md:mt-8 font-semibold flex flex-col text-sm md:text-base space-y-2 md:space-y-0 md:flex-row justify-between items-center mx-auto md:space-x-4 lg:space-x-6 w-[80%] sm:w-[70%]  max-w-lg p-1 md:p-2 lg:p-3" >
            {Links.map((link, i) => (
                <NavLink key={i} to={link.path} className={({ isActive, isPending }) => { return `flex justify-center items-center w-[70%] mx-auto md:w-full h-full py-1 md:py-2 transition-all duration-300 ease-in-out ${isActive ? 'bg-purple-600 drop-shadow-lg ' : 'bg-[#313131]'} ` }} >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar