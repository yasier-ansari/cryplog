import { createContext, useEffect, useState } from "react";


export const TrendContext = createContext({});

export const TrendProvider = ({ children }) => {
    const [trendingData, setTrendingData] = useState()
    const [mode, setMode] = useState(true)



    const getTrendingData = async () => {
        let data = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json())
        setTrendingData(data.coins);
    }
    useEffect(() => {
        const bodyClasses = window.document.body.classList;
        if (mode) {
            bodyClasses.add('dark')
        } else {
            bodyClasses.remove('dark')
        }
        getTrendingData()
    }, [mode])

    return (
        <TrendContext.Provider value={{ trendingData, setMode, mode }} >
            {children}
        </TrendContext.Provider>
    )
}