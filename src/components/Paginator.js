import { useEffect, useContext } from 'react'
import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';
import { ListContext } from "../context/ListContext";

const Paginator = () => {
    const { setCurrentPage, currentPage } = useContext(ListContext);
    const maxPage = 100;
    const pageShifterLeft = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const pageShifterRight = () => {
        if (currentPage !== 100) {
            setCurrentPage(currentPage + 1);
        }
    }
    const maxShifterLeft = () => {
        setCurrentPage(currentPage - 3);
    }
    const maxShifterRight = () => {
        setCurrentPage(currentPage + 3);
    }
    useEffect(() => {
        console.log(currentPage);
    }, [currentPage])

    return (
        <div className="my-3 md:py-4 text-white flex items-center space-x-4 md:space-x-6 lg:space-x-8" >
            <button onClick={pageShifterLeft} className={`flex items-center justify-center rounded-xl bg-purple-500  p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 `} >
                <TbArrowNarrowLeft className='stroke-[3px] ' />
            </button>
            <div className="flex space-x-2 text-xs md:text-sm lg:text-base md:space-x-3 lg:space-x-4 items-center justify-center " >
                {
                    (currentPage !== 1 && currentPage !== 2 && currentPage !== 3) && (<button onClick={(e) => { setCurrentPage(1) }} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >1</button>)
                }
                {
                    (currentPage !== 1 && currentPage !== 2 && currentPage !== 3 && currentPage !== 4) && (<button onClick={maxShifterLeft} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >...</button>)
                }
                {
                    (currentPage === maxPage) && (<button onClick={(e) => setCurrentPage(currentPage - 3)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage - 4}</button>)
                }
                {
                    (currentPage === maxPage || currentPage === maxPage - 1 || currentPage === maxPage - 2) && (<button onClick={(e) => setCurrentPage(currentPage - 3)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage - 3}</button>)
                }
                {
                    (currentPage === maxPage || currentPage === maxPage - 1 || currentPage === 4 || currentPage === 3) && (<button onClick={(e) => setCurrentPage(currentPage - 2)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage - 2}</button>)
                }
                {
                    ((currentPage !== 1 || currentPage !== 2) && (currentPage !== 1)) && (<button onClick={(e) => setCurrentPage(currentPage - 1)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage - 1}</button>)
                }
                <button className="flex items-center justify-center rounded-xl bg-purple-700 font-semibold p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage}</button>
                {
                    (currentPage !== 100) && (<button onClick={(e) => setCurrentPage(currentPage + 1)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage + 1}</button>)
                }
                {
                    (currentPage === 1 || currentPage === 2 || currentPage === 3 || currentPage === 97) && (<button onClick={(e) => setCurrentPage(currentPage + 2)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage + 2}</button>)
                }
                {
                    (currentPage === 1 || currentPage === 2) && (<button onClick={(e) => setCurrentPage(currentPage + 3)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage + 3}</button>)
                }
                {
                    (currentPage === 1) && (<button onClick={(e) => setCurrentPage(currentPage + 3)} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >{currentPage + 4}</button>)
                }
                {
                    (currentPage !== maxPage && currentPage !== maxPage - 1 && currentPage !== maxPage - 2 && currentPage !== maxPage - 3) && (
                        <button onClick={maxShifterRight} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >...</button>
                    )
                }

                {
                    (currentPage !== maxPage && currentPage !== maxPage - 1) && (<button onClick={(e) => { setCurrentPage(maxPage) }} className="flex items-center justify-center rounded-xl bg-purple-600/40 dark:bg-purple-900/60 p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 " >100</button>)
                }


            </div>
            <button onClick={pageShifterRight} className={`flex items-center justify-center rounded-xl bg-purple-500  p-1 md:p-2 h-6 w-6 md:h-9 md:w-9 `} >
                <TbArrowNarrowRight className='stroke-[3px]' />
            </button>
        </div>
    )
}

export default Paginator