import React, { useContext } from 'react'
import { ListContext } from "../context/ListContext"
import { HiOutlineBookmark } from 'react-icons/hi2'

const List = () => {
    let { apiData } = useContext(ListContext);
    return (
        <div className="flex flex-col border rounded-sm" >
            {
                apiData ? (
                    <table className=" table-auto w-full border" >
                        <thead className="text-base text-center font-medium md:text-lg border-b bg-[#313131]" >
                            <tr>
                                <th className="py-1 md:py-2 " >Asset</th>
                                <th className="py-1 md:py-2 " >Name</th>
                                <th className="py-1 md:py-2 " >Price</th>
                                <th className="py-1 md:py-2 " >Total Volume</th>
                                <th className="py-1 md:py-2 " >Market Cap</th>
                                <th className="py-1 md:py-2 " >24H</th>
                                <th className="py-1 md:py-2 " >7D</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((res, key) => {
                                    return (
                                        <tr key={key} className="border-b last:border-b-0 text-center hover:bg-black " >
                                            <td className=" flex items-center justify-center space-x-1 py-1 sm:py-2 md:py-3 lg:py-4" >
                                                <button className="group outline-none h-5 w-3 sm:h-6 sm:w-4 md:h-8 md:w-5 " >
                                                    <HiOutlineBookmark className=" group-hover:fill-purple-600 group-hover:text-purple-600" />
                                                </button>
                                                <img src={res.image} alt={res.name} className=" h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                                <p className="ml-2" >{res.symbol}</p>
                                            </td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.name}</td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.current_price}</td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.total_volume}</td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.market_cap_change_percentage_24h}</td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.price_change_percentage_24h}</td>
                                            <td className="py-1 md:py-2 lg:py-3" >{res.price_change_percentage_7d_in_currency}</td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>) : ''
            }

        </div>
    )
}

export default List