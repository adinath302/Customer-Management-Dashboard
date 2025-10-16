import React from 'react'
import { BsDatabase } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
import { LuShoppingBag } from 'react-icons/lu'
import { RiHome2Line } from 'react-icons/ri'
import { TbBrandGoogleAnalytics, TbTargetArrow } from 'react-icons/tb'

const SidePanel = () => {
    return (
        <div>
            {/* Sidebar grid-1 */}
            <div className='flex flex-col p-3 min-h-screen border-r-1 border-gray-200 bg-[#faebe4]'>
                <h5 className='font-bold mb-4'>Product Inventory</h5>

                <div className='text-[11px] font-semibold mb-3 text-gray-500'>MAIN MENU</div>

                <div className='ml-3 gap-4 flex flex-col mb-6 text-sm text-gray-800'>
                    <div className='flex gap-2 items-center '>
                        <RiHome2Line />
                        Home
                    </div>
                    <div className='flex gap-2 items-center'>
                        <LuShoppingBag />
                        My Store
                    </div>
                    <div className='flex gap-2 items-center'>
                        <BsDatabase />
                        Finance
                    </div>
                    <div className='flex gap-2 items-center'>
                        <GoPeople />
                        Customers
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TbBrandGoogleAnalytics />
                        Analytics Report
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TbTargetArrow />
                        Marketing
                    </div>
                    <div className='flex gap-2 items-center'>
                        <CiSettings />
                        Settings
                    </div>
                </div>
                <div className='text-[11px] font-semibold mb-3 text-gray-500'>SALES CHANNELS</div>
                <div className='ml-3 gap-4 flex flex-col mb-3 text-sm text-gray-800'>
                    <div className='flex gap-2 items-center'>
                        <LuShoppingBag />
                        Online Store
                    </div>
                    <div className='flex gap-2 items-center'>
                        <RiHome2Line />
                        Point of Sale
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePanel