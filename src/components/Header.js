import { useContext } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

const Header = () => {
    const { mode, setMode, setTheme } = useContext(ThemeContext);
    if (localStorage.getItem("theme") === "light") {
        setMode(false);
    } else {
        setMode(true);
    }
    const themeHandler = (theme) => {
        if (theme === "light") {
            localStorage.setItem("theme", "light");
            setMode(false);
            setTheme();
        } else {
            localStorage.setItem("theme", "dark");
            setMode(true);
            setTheme();
        }
    }
    return (
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto max-w-7xl py-1 sm:py-2 lg:py-3 sticky flex justify-between items-center px-6 md:px-8 lg:px-10" >
            <NavLink to="/" className="select-none transition-all duration-1000 ease-out " >
                {
                    mode ? (
                        <img src="/cryplog-dark.png" alt="dark-logo" className={`  h-8 sm:h-10 md:h-12 xl:h-16 `} />
                    ) : (
                        <img src="/cryplog-light.png" alt="dark-logo" className={` h-8 sm:h-10 md:h-12 xl:h-16 `} />
                    )
                }
            </NavLink>
            <div className="flex items-center justify-center transition-all duration-1000 ease-in-out bg-black/20 dark:bg-white/10 p-1 md:p-2 xl:p-3 rounded-md h-max " >
                {
                    !mode ? (
                        <button onClick={() => { themeHandler("dark") }} >
                            <MdDarkMode className="fill-black h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 " />
                        </button>
                    ) : (
                        <button onClick={() => { themeHandler("light") }} >
                            <MdLightMode className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 " />
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Header

