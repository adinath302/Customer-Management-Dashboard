import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { GoDotFill } from "react-icons/go";

const CustomerList = ({ addCustomer, HandleDelete }) => {

    return (
        <div className='flex flex-col border-1 rounded-sm border-[#faebe4]'>
            {/* Customer List NAMES */}
            <div>
                <div className='grid grid-cols-[250px_300px_200px_250px_110px] bg-[#faebe4] py-2 px-2 items-center rounded-sm font-semibold text-sm'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Membership</div>
                    <div>Join Date</div>
                    <div>Delete</div>
                </div>
            </div>
            {/* Customer List MAP DATA */}
            <div>
                {addCustomer.map((item) => (
                    <div
                        className='grid grid-cols-[250px_300px_200px_250px_110px] items-center border-b-1 border-[#faebe4] font-semibold text-sm text-gray-600 '
                        key={item.id}
                    >
                        <div className='border-r-1 border-[#faebe4] p-2 flex items-center gap-1'>
                            <img src={item.avatar} alt="Customer Avatar" className='h-[30px] w-[35px]' />
                            {item.name}
                        </div>
                        <div className='border-r-1 border-[#faebe4] p-2'>{item.email}</div>
                        <div className='border-r-1 border-[#faebe4] flex items-center gap-1'>
                            <span className='border-green-500 text-sm bg-green-200 border-1 px-2 rounded-xl items-center p-1 flex'>
                                <GoDotFill />
                                {item.membership}
                            </span>

                        </div>
                        <div className='border-r-1 border-[#faebe4] p-2'>{item.joinDate}</div>
                        <div
                            onClick={() => HandleDelete(item.id)}
                            className=' border-[#faebe4] p-1 border-1 cursor-pointer bg-[#8B4513] rounded-xl flex items-center justify-center text-white'>Delete</div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default CustomerList