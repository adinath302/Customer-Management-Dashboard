import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const Search_Filter_Panel = ({ setFilterData, filterdata, search, setSearch, sortData, setSortData }) => {

    const HandleFilter = (event) => {
        const selectedText = event.target.value;
        console.log('selectedtext', selectedText);

        setFilterData(selectedText);
    }
    
    const HandleSort = (event) => {
        const selectedSort = event.target.value;
        setSortData(selectedSort);
    }

    return (
        <div className='flex gap-3 items-center justify-between'>
            {/* search  */}
            <div className='border flex rounded-xl items-center  py-[5px] px-[15px] gap-1 bg-[#faebe4]'>
                <CiSearch />
                <input
                    type="text"
                    placeholder={`Search here...`}
                    className={` font-semibol font-semiboldp-1 focus:outline-none !text-sm font-semibold text-gray-400`}
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                />
            </div>
            <div className='flex gap-2'>

                {/* Sort */}
                <div>
                    <select name="" id="" value={sortData} onChange={HandleSort} className='p-[3px] focus:outline-none rounded-md border'>
                        <option value="">Sort</option>
                        <option value="A to Z">A to Z</option>
                        <option value="Z to A">Z to A</option>
                    </select>
                </div>
                {/* Filter */}
                <div>
                    <select
                        value={filterdata}
                        name=""
                        id=""
                        className='focus:outline-none border rounded-md p-[3px]' onChange={HandleFilter}>
                        <option value="">Filter</option>
                        <option value="ALL">ALL</option>
                        <option value="VIP">VIP</option>
                        <option value="Premium">Premium</option>
                        <option value="FREE">FREE</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search_Filter_Panel;