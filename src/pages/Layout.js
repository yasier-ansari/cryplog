import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Layout = () => {
    const [mode, setMode] = useState(true)
    return (
        <main className="w-full flex h-full font-pri font-base text-white bg-[#222222] mx-auto justify-between flex-col " >
            <nav className="flex justify-between md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5" >
                <div>
                    HyRaX
                </div>
                <button onClick={(e) => setMode(!mode)} className="flex items-center justify-center bg-white/10 px-2 py-2 " >
                    {
                        mode ? (
                            <MdDarkMode />
                        ) : (
                            <MdLightMode />
                        )
                    }
                </button>
            </nav>
            <Outlet />
        </main>
    )
}

export default Layout