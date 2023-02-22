import { createContext, useLayoutEffect, useState } from "react";


export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
    const [mode, setMode] = useState("dark")
    const [apiData, setApiData] = useState();
    const getApiData = async () => {
        let data;
        try {
            data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
                .then((res) => res.json())
        } catch (error) {
            console.log(error)
        } finally {
            setApiData(data)
            console.log(data)
        }
    }

    useLayoutEffect(() => {
        getApiData()
    }, [])
    return (
        <ListContext.Provider value={{ mode, setMode, apiData }} >
            {children}
        </ListContext.Provider>
    )
}