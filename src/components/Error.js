import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
const Error = () => {
    return (
        <main className="w-full flex min-h-screen font-pri font-base dark:text-white/90 text-black/90 dark:text-white bg-white/60 dark:bg-[#222222] mx-auto justify-start flex-col" >
            <Header />
            <Navbar />
            <div className="mt-20 flex flex-col items-center justify-center space-y-6 " >
                <p>Uh oh!</p>
                <div className=" text-8xl font-bold flex justify-center select-none items-center space-x-1">
                    <p>4</p>
                    <img src="/logo512.png" alt="s" className="h-24 w-24 " />
                    <p>4</p>
                </div>
                <div className=" max-w-2xl text-xl font-medium text-center mx-auto flex space-x-1 " >
                    <p className="space-x-1" > Looks like you've wandered off the blockchain - this page is more elusive than
                        <a href="https://en.wikipedia.org/wiki/Satoshi_Nakamoto" target="_blank" rel="noreferrer" className="ml-1 text-purple-400 hover:font-semibold hover:text-purple-600 " >
                            Satoshi Nakamoto!
                        </a>
                    </p>
                </div>
            </div>        </main>

    )
}

export default Error