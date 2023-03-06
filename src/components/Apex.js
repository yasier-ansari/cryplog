import { Tooltip } from "chart.js";
import React, { useLayoutEffect, useState } from 'react'



import { LineChart, Line, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
}

const RenderLineChart = ({ data }) => (
    <ResponsiveContainer ResponsiveContainer width="100%" height="100%" >
        <LineChart data={data}>
            <CartesianGrid stroke="#31231220" />
            {
                data[0].price < 100000 ? (<YAxis domain={['dataMin - 100', 'dataMax + 100']} />) : (<YAxis domain={['dataMin - 100', 'dataMax + 100']} hide />)
            }
            {
                data.length > 40 ? (
                    <></>
                ) : (
                    <Tooltip content={<CustomTooltip />} />
                )
            }
            {
                data.length > 40 ? (
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={"4px"} />


                ) : (
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={"2px"} />
                )
            }
        </LineChart>
    </ResponsiveContainer >
);

const Apex = ({ cid, days, duration, title }) => {
    const [chartData, setChartData] = useState();
    useLayoutEffect(() => {
        const fetchChart = async () => {
            try {
                let res = await fetch(`https://api.coingecko.com/api/v3/coins/${cid}/market_chart?vs_currency=usd&days=${days}&interval=${duration}`)
                    .then((res) => res.json())
                console.log(res)
                if (title === "prices") {
                    const convert = res.prices.map((el) => {
                        return {
                            date: new Date(el[0]).toLocaleDateString(),
                            price: Math.ceil(`${el[1]}`),
                        }
                    })
                    setChartData(convert)
                } else if (title === "total_volumes") {
                    const convert = res.total_volumes.map((el) => {
                        return {
                            date: new Date(el[0]).toLocaleDateString(),
                            price: Math.ceil(`${el[1]}`),
                        }
                    })
                    setChartData(convert)
                } else {
                    const convert = res.market_caps.map((el) => {
                        return {
                            date: new Date(el[0]).toLocaleDateString(),
                            price: Math.ceil(`${el[1]}`),
                        }
                    })
                    setChartData(convert)
                }


            } catch (error) {
                console.log(error)
            }
        }
        fetchChart()
    }, [cid, days, duration, title]);
    console.log(chartData, "asa")
    return (
        <>
            {
                chartData ? (
                    <div className={`h-80 w-full ${title === "prices" && ' sm:-ml-10 '} ${title === "market_caps" && ' sm:-ml-2 '} ${title === "total_volumes" && ' sm:-ml-2 '} md:ml-0 `} >
                        <RenderLineChart data={chartData} />
                    </div>
                ) : (
                    <div className="h-80 border border-gray-400 rounded-lg bg-[#313131] w-full flex space-x-4 font-semibold justify-center items-center ">
                        <div className="h-6 w-6 bg-transparent animate-spin border-purple-500 rounded-full border-b-white border-4 "  ></div>
                        <p className="text-lg md:text-xl lg:text-2xl" >Fetching...</p>
                    </div >
                )
            }
        </>

    )
}

export default Apex