import React, { useContext, useState } from 'react'
import debounce from "lodash.debounce"
import { HiOutlineSearch } from 'react-icons/hi'
import { ListContext } from "../context/ListContext"
import { IoMdRefresh } from 'react-icons/io'

const SearchInput = (props) => {
    const [searchText, setSearchText] = useState('')
    let { searchData, setCoinSearch, setSearchData } = useContext(ListContext);

    let searchHandler = (e) => {
        e.preventDefault()
        let res = e.target.value;
        setSearchText(res);
        props.searchRefresh(res)
    }
    const searchClearer = (id) => {
        setCoinSearch(id)
        setSearchText("")
        setSearchData();

    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.searchRefresh(searchText)
        console.error("ad")
    }
    return (
        <>
            <form className="relative w-full py-2 lg:basis-[40%] lg:py-1 justify-center flex items-center rounded-md bg-slate-200 dark:bg-[#313131]" >
                <button onClick={submitHandler}>
                    < HiOutlineSearch className="absolute w-4 h-4 md:w-6 md:h-6 top-[26%] left-3 md:left-4 md:top-[26%] lg:top-[20%] " />
                </button>
                <input onChange={searchHandler} value={searchText} type="text" placeholder="Search..." className=" text-sm md:text-base block w-full pl-10  outline-none md:pl-12  lg:pl-12 sm:py-1 md:py-2 h-full rounded-md bg-slate-200 dark:bg-[#313131] " />
            </form>
            {
                searchText.length > 0 ?
                    (<ul className="absolute searchModal inset-0 top-[3.5rem] md:left-3 lg:left-4 w-full max-h-80 lg:w-[38.5%] h-max rounded-md bg-slate-300/90 dark:bg-[#41414190] overflow-x-hidden  "  >
                        {
                            searchData ? searchData.map((data, key) => (
                                <button onClick={(e) => searchClearer(data.id)} key={key} className=" hover:bg-purple-500 hover:text-white dark:hover:bg-purple-900 flex items-center justify-between space-x-4 md:space-x-3 w-full h-max py-1 px-3 md:px-4 md:py-2 lg:px-5 lg:py-3 " >
                                    <img src={data.large} alt={data.name} className="w-3 h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                                    <p className="font-semibold basis-[80%] text-start " >{data.name}</p>
                                    <p className="uppercase text-xs basis-[15%] " >{data.symbol}</p>
                                </button>
                            )) : (
                                <div className="h-52 w-full flex font-semibold justify-center items-center ">
                                    <svg aria-hidden="true" className="inline w-8 h-8 mr-4 text-gray-200 animate-spin dark:text-gray-400 fill-purple-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    Searching...
                                </div>
                            )
                        }
                    </ul>) :
                    null
            }
        </>
    )
}

const Search = () => {
    const { getSearchData, setCurrency, setOrder, refreshPage } = useContext(ListContext)
    const searchRefresh = debounce(function (val) {
        getSearchData(val)
    }, 1000)
    const curr = [
        "usd",
        "btc",
        "eth",
        "ltc",
        "bch",
        "bnb",
        "eos",
        "xrp",
        "xlm",
        "link",
        "dot",
        "yfi",
        "aed",
        "ars",
        "aud",
        "bdt",
        "bhd",
        "bmd",
        "brl",
        "cad",
        "chf",
        "clp",
        "cny",
        "czk",
        "dkk",
        "eur",
        "gbp",
        "hkd",
        "huf",
        "idr",
        "ils",
        "inr",
        "jpy",
        "krw",
        "kwd",
        "lkr",
        "mmk",
        "mxn",
        "myr",
        "ngn",
        "nok",
        "nzd",
        "php",
        "pkr",
        "pln",
        "rub",
        "sar",
        "sek",
        "sgd",
        "thb",
        "try",
        "twd",
        "uah",
        "vef",
        "vnd",
        "zar",
        "xdr",
        "xag",
        "xau",
        "bits",
        "sats"
    ];


    const ord = ["market_cap_desc", "gecko_desc", "gecko_asc", "market_cap_asc", "market_cap_desc", "volume_asc", "volume_desc", "id_asc", "id_desc"]
    return (
        <div className="flex flex-col w-[95%] md:w-[85%] mx-auto lg:flex-row p-1 sm:p-2 md:p-3 lg:p-4 justify-between items-center relative">
            <SearchInput searchRefresh={searchRefresh} />
            <div className="flex text-xs md:text-base flex-col md:flex-row w-max mt-3 sm:mt-5 lg:mt-0 space-y-3 sm:space-y-5 justify-start items-center md:space-y-0 md:justify-end lg:space-x-12 last:space-x-6 " >
                <div className="flex items-center justify-center space-x-5  md:space-x-8 lg:space-x-3" >
                    <div className="" >Currency</div>
                    <select onChange={(e) => setCurrency(e.target.value)} defaultValue="usd" className=" text-black dark:text-white bg-slate-300 dark:bg-[#313131] uppercase rounded-md h-full w-full px-1 md:px-2 lg:px-3 py-1 md:py-2 outline-none " >
                        {
                            curr.map((cur, key) => {
                                return (<option value={cur} key={key} >{cur}</option>)
                            }
                            )
                        }
                    </select>
                </div>
                <div className="flex items-center justify-center space-x-5 md:space-x-8 lg:space-x-3" >
                    <div className="" >Sort</div>
                    <select defaultValue="market_cap_desc" onChange={(e) => setOrder(e.target.value)} className=" bg-slate-300 text-black dark:text-white dark:bg-[#313131] rounded-md h-full w-full px-1 md:px-2 lg:px-3 py-1 md:py-2 outline-none " >
                        {
                            ord.map((cur, key) => {
                                return (<option value={cur} key={key} >{cur}</option>)
                            }
                            )
                        }
                    </select>
                    <button onClick={refreshPage} className="flex items-center justify-center" >
                        < IoMdRefresh className=" hover:fill-purple-700 fill-purple-500 dark:hover:fill-white  w-4 h-4 sm:w-5 sm:h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 " />
                    </button>
                </div>
            </div >
        </div >
    )
}

export default Search;