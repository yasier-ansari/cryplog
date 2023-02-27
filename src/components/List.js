import React, { useContext } from 'react'
import { ListContext } from "../context/ListContext"
import { HiOutlineBookmark } from 'react-icons/hi2'
import Paginator from "./Paginator";

const List = () => {
    let { apiData } = useContext(ListContext);
    return (
        <>
            <div className="flex flex-col rounded-sm items-center justify-center " >
                {
                    apiData ? (
                        <table className=" table-auto w-full border" >
                            <thead className="text-base text-center font-medium md:text-lg border-b bg-[#313131]" >
                                <tr>
                                    <th className="py-1 md:py-2 " >Asset</th>
                                    <th className="py-1 md:py-2  " >Name</th>
                                    <th className="py-1 md:py-2 " >Price</th>
                                    <th className="py-1 md:py-2 " >Volume</th>
                                    <th className="py-1 md:py-2 " >Market Cap</th>
                                    <th className="py-1 md:py-2 " >24H</th>
                                    <th className="py-1 md:py-2 " >7D</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    apiData.map((res, key) => {
                                        return (
                                            <tr key={key} className="border-b uppercase last:border-b-0 text-center hover:bg-black " >
                                                <td className=" flex ml-2 items-center space-x-1 py-1 sm:py-2 md:py-3 lg:py-4 px-2 sm:px-3 md:px-4" >
                                                    <button className="group outline-none h-5 w-3 sm:h-6 sm:w-4 md:h-8 md:w-5 cursor-pointer " >
                                                        <HiOutlineBookmark className=" group-hover:fill-purple-600 group-hover:text-purple-600" />
                                                    </button>
                                                    <img src={res.image} alt={res.name} className=" h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                                    <p className="ml-2" >{res.symbol}</p>
                                                </td>
                                                <td className=" py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4" >{res.name}</td>
                                                <td className="py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4" > <span className="font-semibold" >$</span>  {Number(res.current_price).toFixed(2)}</td>
                                                <td className="py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4" >
                                                    {
                                                        res.total_volume > 1000 ? Number(res.total_volume).toString().slice(0, -3) : res.total_volume
                                                    } <span className="font-semibold" >K</span>
                                                </td>
                                                <td className={`${res.market_cap_change_percentage_24h}` > 0 ? ' text-green-500 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 ' : ' text-red-400 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 '} >{Number(res.market_cap_change_percentage_24h).toPrecision(2)}% </td>
                                                <td className={`${res.price_change_percentage_24h}` > 0 ? ' text-green-500 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 ' : ' text-red-400 py-1 md:py-2 lg:py-3 font-semibold px-2 sm:px-3 md:px-4 '} >{Number(res.price_change_percentage_24h).toPrecision(2)}% </td>
                                                <td className={`${res.price_change_percentage_7d_in_currency}` > 0 ? 'text-green-500 py-1 md:py-2 lg:py-3  font-semibold pr-3 sm:pr-4 md:pr-5 pl-2 sm:pl-3 md:pl-4  ' : 'text-red-400 py-1 md:py-2 lg:py-3  font-semibold pr-3 sm:pr-4 md:pr-5 pl-2 sm:pl-3 md:pl-4 '} >{Number(res.price_change_percentage_7d_in_currency).toPrecision(2)}% </td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>) : (
                        <div className="h-60 border border-gray-400 rounded-lg bg-[#3a3a3a] w-full flex space-x-4 font-semibold justify-center items-center ">
                            {/* <svg aria-hidden="true" className="inline w-8 h-8 mr-4 text-gray-200 animate-spin dark:text-gray-400 fill-purple-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg> */}
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