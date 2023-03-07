import { useContext } from 'react'
import { TrendContext } from "../context/TrendingContext";
import { FiTrendingUp } from 'react-icons/fi'
import { FaMoneyBillWaveAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Trending = () => {
    const { trendingData } = useContext(TrendContext);
    console.log(trendingData)
    return (
        <section className="flex w-full h-max py-6 sm:py-8 md:py-10 lg:py-12 flex-col space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto max-w-7xl relative" >
            <div className="w-full flex flex-wrap items-center justify-evenly h-full ">
                {
                    trendingData ? (
                        <>
                            {
                                trendingData.map((data, key) => {
                                    return (
                                        <div key={key} className="flex justify-between mb-12 w-[75%] md:w-[40%] h-40 overflow-visible bg-purple-900/30 rounded-lg relative" >
                                            <div className="flex flex-col ml-2 basis-[80%] justify-between items-start p-2   ">
                                                <p className=" text-lg lg:text-2xl font-semibold " >{data.item.name}</p>
                                                <p className=" text-xs lg:text-sm font-medium text-gray-200 dark:text-gray-400 mb-2 " >{data.item.symbol}</p>
                                                <p className="flex items-center justify-center space-x-2 " > <span>
                                                    <FiTrendingUp />
                                                </span>
                                                    <span>
                                                        {data.item.market_cap_rank} Rank
                                                    </span> </p>
                                                <p className="flex items-center text-xs justify-center space-x-2 " >
                                                    <span>
                                                        <FaMoneyBillWaveAlt />
                                                    </span>
                                                    <span>
                                                        {data.item.price_btc.toFixed(20)}
                                                    </span> </p>
                                                <Link to={`/${data.item.id}`} className="font-semibold" >
                                                    See more ...
                                                </Link>
                                            </div>
                                            <img src={data.item.large} alt={data.item.slug} className=" absolute h-24 sm:h-32 lg:h-44 -top-8 md:-top-8 -right-8 md:-right-12 rounded-full " />
                                        </div>
                                    )
                                }
                                )
                            }

                        </>
                    ) : (
                        <div className="h-60 border border-gray-400 rounded-lg bg-slate-300 dark:bg-[#3a3a3a] w-full flex space-x-4 font-semibold justify-center items-center ">
                            <div className="h-6 w-6 bg-transparent animate-spin border-purple-500 rounded-full border-b-gray-400 border-4 "  ></div>
                            <p className="text-lg md:text-xl lg:text-2xl" >Searching...</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Trending