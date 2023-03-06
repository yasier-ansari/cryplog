import React, { useContext } from 'react'
import { ListContext } from "../context/ListContext"
import { HiOutlineBookmark } from 'react-icons/hi2'
import Paginator from "./Paginator";
import { Link } from "react-router-dom";

const List = () => {
    let { apiData } = useContext(ListContext);
    return (
        <>
            <div className="flex flex-col rounded-sm items-center justify-center " >
                {
                    apiData ? (
                        <table className=" table-auto w-full dark:border border-2 border-black/30 dark:border-gray-300 " >
                            <thead className="text-base text-center font-medium md:text-lg dark:border-gray-300 border-black/50 border-b bg-[#f9f9ff] dark:bg-[#313131]" >
                                <tr>
                                    <th className="py-1 md:py-2 " >Asset</th>
                                    <th className="py-1 md:py-2 md:table-cell hidden " >Name</th>
                                    <th className="py-1 md:py-2 " >Price</th>
                                    <th className="py-1 md:py-2 lg:table-cell hidden " >Volume</th>
                                    <th className="py-1 md:py-2 md:table-cell hidden " >Market Cap</th>
                                    <th className="py-1 md:py-2  " >24H</th>
                                    <th className="py-1 md:py-2 lg:table-cell hidden " >7D</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    apiData.map((res, key) => {
                                        return (
                                            <tr key={key} className="dark:border-b dark:border-gray-300 border-black/30  border-b-2 first:border-t-2 dark:first:border-t uppercase last:border-b-0 text-center hover:bg-purple-200 dark:hover:bg-black " >
                                                <td className=" flex ml-2 items-center space-x-1 py-1 sm:py-2 md:py-3 lg:py-4 px-2 sm:px-3 md:px-4" >
                                                    <button className="group outline-none h-5 w-3 sm:h-6 sm:w-4 md:h-8 md:w-5 cursor-pointer " >
                                                        <HiOutlineBookmark className=" group-hover:fill-purple-600 group-hover:text-purple-600" />
                                                    </button>
                                                    <Link to={`/${res.id}`} className="flex items-center justify-center" >
                                                        <img src={res.image} alt={res.name} className=" h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                                        <p className="ml-2" >{res.symbol}</p>
                                                    </Link>

                                                </td>
                                                <td className=" py-1 md:py-2 lg:py-3 px-2 font-medium sm:px-3 md:px-4 md:table-cell hidden " >
                                                    <Link to={`/${res.id}`} >
                                                        {res.name}
                                                    </Link>
                                                </td>
                                                <td className="py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4" > <span className="font-semibold" >$</span>  {Number(res.current_price).toFixed(2)}</td>
                                                <td className="py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 lg:table-cell hidden" >
                                                    {
                                                        res.total_volume > 1000 ? Number(res.total_volume).toString().slice(0, -3) : res.total_volume
                                                    } <span className="font-semibold" >K</span>
                                                </td>
                                                <td className={`${res.market_cap_change_percentage_24h}` > 0 ? ' text-green-500 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 md:table-cell hidden ' : ' text-red-400 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 md:table-cell hidden '} >{Number(res.market_cap_change_percentage_24h).toPrecision(2)}% </td>
                                                <td className={`${res.price_change_percentage_24h}` > 0 ? ' text-green-500 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 ' : ' text-red-400 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 '} >{Number(res.price_change_percentage_24h).toPrecision(2)}% </td>
                                                <td className={`${res.price_change_percentage_7d_in_currency}` > 0 ? 'text-green-500 py-1 md:py-2 lg:py-3  font-semibold pr-3 sm:pr-4 md:pr-5 pl-2 sm:pl-3 md:pl-4 lg:table-cell hidden  ' : 'text-red-400 py-1 md:py-2 lg:py-3  font-semibold pr-3 sm:pr-4 md:pr-5 pl-2 sm:pl-3 md:pl-4 lg:table-cell hidden '} >{Number(res.price_change_percentage_7d_in_currency).toPrecision(2)}% </td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>) : (
                        <div className="h-60 border border-gray-400 rounded-lg bg-purple-200/50 dark:bg-[#3a3a3a] w-full flex space-x-4 font-semibold justify-center items-center ">
                            <div className="h-6 w-6 bg-transparent animate-spin border-purple-500 rounded-full border-b-gray-400 border-4 "  ></div>
                            <p className="text-lg md:text-xl lg:text-2xl" >Searching...</p>
                        </div>
                    )
                }
                <div>
                    <Paginator />
                </div>
            </div>

        </>
    )
}

export default List