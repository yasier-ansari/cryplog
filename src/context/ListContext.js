import { createContext, useEffect, useState } from "react";


export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
    const [mode, setMode] = useState("dark")
    const [apiData, setApiData] = useState();
    const [searchData, setSearchData] = useState();
    const [coinSearch, setCoinSearch] = useState("");
    const [currency, setCurrency] = useState("usd");
    const [order, setOrder] = useState("market_cap_desc");
    const [currentPage, setCurrentPage] = useState(1);

    const getApiData = async () => {
        let data;
        try {
            data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${order}&per_page=20&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
                .then((res) => res.json())
            console.log(data)
            setApiData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getSearchData = async (find) => {
        let query;
        try {
            query = await fetch(`https://api.coingecko.com/api/v3/search?query=${find}`)
                .then((res) => res.json())
            console.log(query.coins, "yas")
            setSearchData(query.coins)
        } catch (error) {
            console.log(error)
        }
    }

    const refreshPage = () => {
        setCurrentPage(1);
        setCurrency("usd");
        setOrder("market_cap_desc");
        setCoinSearch("");
    }

    useEffect(() => {
        getApiData();
    }, [coinSearch, currency, order, currentPage])

    return (
        <ListContext.Provider value={{ mode, setMode, apiData, searchData, setSearchData, getSearchData, setCoinSearch, setCurrency, setOrder, setCurrentPage, currentPage, refreshPage }} >
            {children}
        </ListContext.Provider>
    )
}