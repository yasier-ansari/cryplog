import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    let [mode, setMode] = useState();

    const setTheme = () => {
        const bodyClasses = window.document.body.classList;
        if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "dark") {
            bodyClasses.add('dark');
        } else {
            bodyClasses.remove('dark');
        }
    }

    useEffect(() => {
        // const bodyClasses = window.document.body.classList;
        console.log(localStorage.getItem("theme"))
        console.log(mode)
        // if (mode && !localStorage.getItem("theme")) {
        //     bodyClasses.add('dark');
        //     localStorage.setItem("theme", "dark");
        // } else if (!mode && localStorage.getItem("theme") === "light") {
        //     bodyClasses.remove('dark');
        //     localStorage.setItem("theme", "light");
        // } else if (mode || localStorage.getItem("theme") === "light") {
        //     if (localStorage.getItem("theme") === "light") {
        //         bodyClasses.remove('dark');
        //         localStorage.setItem("theme", "light");
        //     } else {
        //         bodyClasses.add('dark');
        //         localStorage.setItem("theme", "dark");
        //     }

        // } else if (!mode || localStorage.getItem("theme") === "dark") {
        //     bodyClasses.add('dark');
        //     localStorage.setItem("theme", "dark");
        // }
        setTheme();
    }, [mode])

    return (
        <ThemeContext.Provider value={{ setMode, mode, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}