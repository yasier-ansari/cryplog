import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { useParams } from "react-router-dom"
import { ListContext } from "../context/ListContext";
import { useContext, useLayoutEffect, useState } from "react";
import { FaStar, FaFacebookF, FaRedditAlien } from 'react-icons/fa'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { BsWater } from 'react-icons/bs'
import { CgSize } from 'react-icons/cg'
import { SlSupport } from 'react-icons/sl'
import { AiOutlineFieldTime, AiOutlineTwitter, AiOutlineGithub, } from 'react-icons/ai'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { MdCalendarToday } from 'react-icons/md'
import { HiHome } from 'react-icons/hi2'
import Apex from "./Apex";
import Navbar from "./Navbar";

const ProgressBar = (props) => {
    let total = props.high - props.low;
    let greenValue = Math.floor(((props.high - props.current) * 100) / total);
    return (
        <div className="flex items-center w-full " >
            <span className={`bg-rose-500 h-2 rounded-l-lg  `} style={{ width: `${100 - greenValue}%` }} >&nbsp;</span>
            <span className={`bg-green-500 h-2 rounded-r-lg `} style={{ width: `${greenValue}%` }} >&nbsp;</span>
        </div >
    )
}

const CoinInfo = () => {
    const { id } = useParams();
    const { getCoinData, coinData } = useContext(ListContext);
    const [graphTime, setGraphTime] = useState('7');
    const [graphDuration, setGraphDuration] = useState('daily')
    const [title, setTitle] = useState("prices");
    const grp = ['7', '14', '30'];
    const hrgrp = ['daily', 'hourly'];
    useLayoutEffect(() => {
        getCoinData(id);
    }, [id]);

    return (
        <section className="flex h-full py-6 flex-col space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 w-[85%] md:w-[80%] lg:w-[80%] mx-auto max-w-7xl relative" >
            {
                coinData ? (
                    coinData.error ?
                        (
                            <div className="sm:-mt-4 " >
                                <div className="w-52 mx-auto md:w-full md:max-w-3xl" >
                                    <Navbar />
                                </div>
                                <div className="mt-20 flex flex-col items-center justify-center space-y-6 " >
                                    <p>Uh oh! <span className=" ml-1 text-purple-400 font-mono" > `{id}` </span>  coin doesn't exist </p>
                                    <div className=" text-8xl font-bold flex justify-center select-none items-center space-x-1">
                                        <p>4</p>
                                        <img src="/logo512.png" alt="s" className="h-24 w-24 " />
                                        <p>4</p>
                                    </div>
                                    <div className=" max-w-2xl text-xl font-medium text-center mx-auto flex space-x-1 " >
                                        <p> You've hit a digital dead end. Looks like the crypto gods have swallowed this coin whole
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between align-middle space-x-1 md:space-x-2 lg:space-x-3" >
                                        <img src={coinData.image?.small || coinData.image.large} className="rounded-full w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 " alt="coin" />
                                        <p className="text-xl md:text-2xl capitalize lg:text-3xl font-semibold ">{coinData.name}</p>
                                        <p className="flex px-1 uppercase bg-purple-600/40 font-semibold rounded-lg text-xs sm:px-2 sm:py-1 h-max w-max ">
                                            {coinData.symbol}
                                        </p>
                                    </div>
                                    <div className=" flex items-center space-x-1 sm:space-x-2 md:space-x-3 h-max w-max ">
                                        <p className="text-lg md:text-xl lg:text-2xl font-bold " >
                                            $ {coinData.market_data.current_price.usd}
                                        </p>
                                        {
                                            coinData.market_data.price_change_percentage_24h > 0 ? (
                                                <div className="flex items-center bg-green-500/80 font-bold  space-x-1 px-2 lg:py-1 rounded-lg text-[0.6rem]" >
                                                    <p >+{Number(coinData.market_data.price_change_percentage_24h).toPrecision(2)}</p>
                                                    <FiTrendingUp />
                                                </div>
                                            ) : (
                                                <div className="flex items-center bg-red-500/80 font-bold  space-x-1 px-2 lg:py-1 rounded-lg text-[0.6rem]" >
                                                    <p >-{Number(coinData.market_data.price_change_percentage_24h).toPrecision(2)}</p>
                                                    <FiTrendingDown />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center text-xs font-medium md:space-x-6  " >
                                        <p className="flex items-center justify-center rounded-lg bg-slate-200 dark:bg-[#121212] py-1 px-2 text-xs md:px-3" >
                                            # {coinData.market_cap_rank || 'Nan'}&nbsp; Rank
                                        </p>
                                        <div className="flex items-center space-x-2 rounded-lg bg-slate-200 dark:bg-[#121212] py-1 px-2 text-xs md:px-3" >
                                            <FaStar className="fill-purple-400 " />
                                            <p>
                                                {Math.ceil(coinData.community_score) || 0} Score
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex basis-[50%] md:basis-[40%] lg:basis-[30%] font-medium text-xs flex-col items-center justify-start space-y-1 md:space-y-2 " >
                                        <div className="flex items-center self-start ">
                                            <CgArrowsExchangeAltV className="w-3 h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                                            High - Low
                                        </div>
                                        <div className="flex flex-col w-full justify-center space-y-1 md:space-y-2" >
                                            <ProgressBar current={coinData.market_data.current_price.usd} low={coinData.market_data.low_24h.usd} high={coinData.market_data.high_24h.usd} />
                                            <div className="flex items-center justify-between">
                                                <p>  Low - $ {coinData.market_data.low_24h.usd.toLocaleString()} </p>
                                                <p>  High - $ {coinData.market_data.high_24h.usd.toLocaleString()} </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=" mb-4 md:mb-6 lg:mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 md:gap-x-8 md:gap-y-8 place-items-center place-content-center items-center justify-center ">
                                    <div className="flex flex-col w-36 h-20 sm:w-48 md:w-48 md:h-28 lg:w-56 bg-slate-200 dark:bg-[#2f2e35] justify-between rounded-lg px-2 md:px-3 py-2 md:py-3 " >
                                        <div className="text-xs md:text-base flex font-medium items-center justify-start space-x-1 md:space-x-2">
                                            <TbActivityHeartbeat />
                                            <p className="text-xs md:text-base" >
                                                Market Cap
                                            </p>
                                        </div>
                                        <div className="flex justify-between flex-col">
                                            <div className="mt-2 lg:mt-3 " >
                                                {coinData.market_data.market_cap.usd?.toLocaleString()}
                                            </div>
                                            <div>
                                                {
                                                    coinData.market_data.price_change_percentage_24h > 0 ? (
                                                        <div className="flex items-center text-green-500 font-bold  space-x-1 px-1 lg:py-1 rounded-lg text-xs" >
                                                            <p >+{Number(coinData.market_data.price_change_percentage_24h).toPrecision(2)}</p>
                                                            <FiTrendingUp />
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center text-red-500 font-bold  space-x-1 px-1 lg:py-1 rounded-lg text-xs" >
                                                            <p >-{Number(coinData.market_data.price_change_percentage_24h).toPrecision(2)}</p>
                                                            <FiTrendingDown />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-36 h-20 sm:w-48 md:w-48 md:h-28 lg:w-56 bg-slate-200 dark:bg-[#2f2e35] justify-between rounded-lg px-2 md:px-3 py-2 md:py-3 " >
                                        <div className="text-xs md:text-base flex font-medium items-center justify-start space-x-1 md:space-x-2">
                                            <CgSize />
                                            <p className="text-xs md:text-base" >
                                                24 Hr Volume
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="mt-2 lg:mt-3 " >
                                                {coinData.market_data.market_cap.usd?.toLocaleString()}
                                            </div>
                                            <div className="lg:mt-2 text-xs text-gray-400" >
                                                {
                                                    coinData.community_score?.toLocaleString()
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-36 h-20 sm:w-48 md:w-48 md:h-28 lg:w-56 bg-slate-200 dark:bg-[#2f2e35] justify-between rounded-lg px-2 md:px-3 py-2 md:py-3 " >
                                        <div className="text-xs md:text-base flex font-medium items-center justify-start space-x-1 md:space-x-2">
                                            <BsWater />
                                            <p className="text-xs md:text-base" >
                                                Full Diluted
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="mt-2 lg:mt-3 " >
                                                {coinData.market_data.market_cap.usd?.toLocaleString()}
                                            </div>
                                            <div>
                                                {
                                                    coinData.market_data.price_change_percentage_7d > 0 ? (
                                                        <div className="flex items-center text-green-500 font-bold  space-x-1 px-1 lg:py-1 rounded-lg text-xs" >
                                                            <p >+{Number(coinData.market_data.price_change_percentage_7d).toPrecision(2)}</p>
                                                            <FiTrendingUp />
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center text-red-500 font-bold  space-x-1 px-1 lg:py-1 rounded-lg text-xs" >
                                                            <p >-{Number(coinData.market_data.price_change_percentage_7d).toPrecision(2)}</p>
                                                            <FiTrendingDown />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-36 h-20 sm:w-48 md:w-48 md:h-28 lg:w-56 bg-slate-200 dark:bg-[#2f2e35] justify-between rounded-lg px-2 md:px-3 py-2 md:py-3 " >
                                        <div className="text-xs md:text-base flex font-medium items-center justify-start space-x-1 md:space-x-2">
                                            <SlSupport />
                                            <p className="text-xs md:text-base" >
                                                Circulate Supply
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="mt-2 lg:mt-3 " >
                                                {coinData.market_data.circulating_supply?.toLocaleString()}
                                            </div>
                                            <div className="lg:mt-2 text-xs text-gray-400" >
                                                {
                                                    Math.round(coinData.market_data.circulating_supply / coinData.market_data.total_supply) * 100 || ''
                                                }%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span dangerouslySetInnerHTML={{ __html: `${coinData.description.en}` }} className="prose prose-purple font-ter no-underline text-black dark:text-white max-w-full"></span>
                                <div className="flex flex-col justify-between space-x-0">
                                    <div className="flex items-center justify-between font-semibold text-lg lg:text-xl" >
                                        Price Metrics
                                    </div>
                                    <div className="flex items-center justify-between font-base text-lg text-gray-400 dark:text-gray-400/50 " >
                                        Get the latest graph update on major crypto currency
                                    </div>
                                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between my-2 md:my-4 " >
                                        <div className="flex space-x-6 md:space-x-8 lg:space-x-10  " >
                                            <button onClick={(e) => { setTitle("prices") }} className={`flex items-center justify-center ${title === "prices" && ' text-white bg-purple-600'} bg-purple-400/20 px-2 md:px-3 py-1 rounded-lg font-medium text-sm  `} >Price</button>
                                            <button onClick={(e) => { setTitle("market_caps") }} className={`flex items-center justify-center ${title === "market_caps" && 'text-white bg-purple-600'} bg-purple-400/20 px-2 md:px-3 py-1 rounded-lg font-medium text-sm  `} >Market Cap</button>
                                            <button onClick={(e) => { setTitle("total_volumes") }} className={`flex items-center justify-center ${title === "total_volumes" && 'text-white bg-purple-600'} bg-purple-400/20 px-2 md:px-3 py-1 rounded-lg font-medium text-sm  `} >Volume </button>
                                        </div>
                                        <div className="flex justify-between items-center space-x-4 sm:space-x-6 md:space-x-8" >
                                            <div className="flex items-center space-x-1 sm:space-x-2" >
                                                <MdCalendarToday className="h-8 w-8" />
                                                <select onChange={(e) => setGraphTime(e.target.value)} className=" bg-slate-200 text-black dark:text-white dark:bg-[#313131] rounded-md h-full w-full px-1 md:px-2 lg:px-3 py-1 md:py-2 outline-none " >
                                                    {
                                                        grp.map((cur, key) => {
                                                            return (<option value={cur} key={key} >{cur} days</option>)
                                                        }
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="flex items-center space-x-1 sm:space-x-2" >
                                                <AiOutlineFieldTime className="h-8 w-8" />
                                                <select onChange={(e) => setGraphDuration(e.target.value)} className="bg-slate-200 text-black dark:text-white dark:bg-[#313131] rounded-md h-full w-full px-1 md:px-2 lg:px-3 py-1 md:py-2 outline-none " >
                                                    {
                                                        hrgrp.map((cur, key) => {
                                                            return (<option value={cur} key={key} >{cur} days</option>)
                                                        }
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[95%] h-full mx-6 my-4 " >
                                        <Apex cid={coinData.id} days={graphTime} duration={graphDuration} title={title} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-6  my-4">
                                    {
                                        coinData.links.homepage[0] && (
                                            <a href={coinData.links.homepage[0]} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 bg-purple-500 rounded-full "  >
                                                <HiHome className=" fill-white dark:fill-black " />
                                            </a>
                                        )
                                    }
                                    {
                                        coinData.links.repos_url.github[0] && (
                                            <a href={coinData.links.repos_url.github[0]} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 bg-purple-500 rounded-full "  >
                                                <AiOutlineGithub className=" fill-white dark:fill-black " />
                                            </a>
                                        )
                                    }
                                    {
                                        coinData.links.facebook_username && (
                                            <a href={coinData.links.facebook_username} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 bg-purple-500 rounded-full "  >
                                                <FaFacebookF className=" fill-white dark:fill-black " />
                                            </a>
                                        )
                                    }
                                    {
                                        coinData.links.subreddit_url && (
                                            <a href={coinData.links.repos_url.sub_reddit_url} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 bg-purple-500 rounded-full "  >
                                                <FaRedditAlien className=" fill-white dark:fill-black " />
                                            </a>
                                        )
                                    }
                                    {
                                        coinData.links.twitter_screen_name && (
                                            <a href={coinData.links.repos_url.github[0]} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 bg-purple-500 rounded-full "  >
                                                <AiOutlineTwitter className=" fill-white dark:fill-black " />
                                            </a>
                                        )
                                    }
                                </div>
                            </>
                        )
                ) : (
                    <div className="h-80 border border-gray-400 rounded-lg bg-slate-300 dark:bg-[#313131] w-full flex space-x-4 font-semibold justify-center items-center ">
                        <div className="h-6 w-6 bg-transparent animate-spin border-purple-500 rounded-full border-b-white border-4 "  ></div>
                        <p className="text-lg md:text-xl lg:text-2xl" >Searching...</p>
                    </div>
                )
            }
        </section>
    )
}

export default CoinInfo