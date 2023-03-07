import { createContext, useEffect, useState } from "react";


export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
    const [apiData, setApiData] = useState();
    const [searchData, setSearchData] = useState();
    const [coinSearch, setCoinSearch] = useState("");
    const [currency, setCurrency] = useState("usd");
    const [order, setOrder] = useState("market_cap_desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [coinData, setCoinData] = useState();

    const getApiData = async () => {
        setApiData();
        let data;
        try {
            data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${order}&per_page=20&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
                .then((res) => res.json())
            setApiData(data)
        } catch (error) {
        }
    }

    const getSearchData = async (find) => {
        let query;
        try {
            query = await fetch(`https://api.coingecko.com/api/v3/search?query=${find}`)
                .then((res) => res.json())
            setSearchData(query.coins)
        } catch (error) {

        }
    }

    const refreshPage = () => {
        setCurrentPage(1);
        setCurrency("usd");
        setOrder("market_cap_desc");
        setCoinSearch("");
    }

    const getCoinData = async (coinId) => {
        setCoinData()
        let data;
        try {
            data = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&sparkline=false`)
                .then((res) => res.json())
            setCoinData(data)
        } catch (error) {
            setCoinData({ error: "coin not found" });
        }
    }

    useEffect(() => {
        getApiData();
    }, [coinSearch, currency, order, currentPage]);

    return (
        <ListContext.Provider value={{ apiData, searchData, setSearchData, getSearchData, setCoinSearch, setCurrency, setOrder, setCurrentPage, currentPage, refreshPage, getCoinData, coinData }} >
            {children}
        </ListContext.Provider>
    )
}