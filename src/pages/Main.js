import React from 'react'
import List from "../components/List"
import Search from "../components/Search"

const Index = () => {
    return (
        <section className="flex h-max py-6 sm:py-8 md:py-10 lg:py-12 flex-col space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 w-[90%] md:w-[85%] lg:w-[80%] mx-auto max-w-7xl relative" >
            <Search />
            <List />
        </section>
    )
}

export default Index