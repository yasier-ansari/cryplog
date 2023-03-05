import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useParams } from 'react-router-dom'
const Layout = () => {
    const { id } = useParams()
    return (
        <main className="w-full flex min-h-screen font-pri font-base text-white bg-[#222222] mx-auto justify-start flex-col " >
            <Header />
            {
                id ? '' : (
                    <Navbar />
                )
            }
            <Outlet />
        </main>
    )
}

export default Layout