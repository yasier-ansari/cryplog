import { createContext, useEffect, useState } from "react";


export const TrendContext = createContext({});

export const TrendProvider = ({ children }) => {
    const [trendingData, setTrendingData] = useState()

    const getTrendingData = async () => {
        setTrendingData()
        let data = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json())
        setTrendingData(data.coins);
    }
    useEffect(() => {
        getTrendingData()
    }, [])

    return (
        <TrendContext.Provider value={{ trendingData }} >
            {children}
        </TrendContext.Provider>
    )
}