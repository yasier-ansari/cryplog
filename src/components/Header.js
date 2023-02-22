import { useContext } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { ListContext } from "../context/ListContext"

const Header = () => {
    const { mode, setMode } = useContext(ListContext)
    return (
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto max-w-6xl py-1 sm:py-2 lg:py-3 sticky flex justify-between items-center px-6 md:px-8 lg:px-10" >
            <div className="select-none" >
                <img src="/hyrax-dark.png" className="h-8 sm:h-10 md:h-12 xl:h-16" alt="nav-logo" />
            </div>
            <button onClick={(e) => setMode(!mode)} className="flex items-center justify-center bg-white/10 p-1 md:p-2 xl:p-3 rounded-md h-max " >
                {
                    mode ? (
                        <MdDarkMode className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 " />
                    ) : (
                        <MdLightMode className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 " />
                    )
                }
            </button>
        </div>
    )
}

export default Header

