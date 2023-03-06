import { createContext, useEffect, useState } from "react";


export const SaveContext = createContext({});

export const SaveProvider = ({ children }) => {
    const [saveData, setSaveData] = useState()

    const saveCoin = (coinId) => {
        let oldCoin = JSON.parse(localStorage.getItem("coins"));
        if (oldCoin.includes(coinId)) {
            return null;
        } else {
            let newCoin = [...oldCoin, coinId];
        }
    }

    useEffect(() => {
        let isThere = JSON.parse(localStorage.getItem("coins")) || false;
        if (!isThere) {
            localStorage.setItem("coins", JSON.stringify([]));
        } else {
            let savedCoins = JSON.parse(localStorage.getItem("coins"))
            setSaveData(savedCoins)
        }
    }, [])

    return (
        <SaveContext.Provider value={{ saveData }} >
            {children}
        </SaveContext.Provider>
    )
}