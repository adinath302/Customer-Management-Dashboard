import React from 'react'

const DynamicData = ({ HandleData }) => {
    return (
        <div className='flex gap-2 mt-2'>
            <div className='p-1 border bg-gray-50 rounded-md shadow-md font-semibold hover:shadow-xl transition-all hover:scale-105 text-sm '>
                👥 Total Customers: {HandleData.length}
            </div>

            <div className='p-1 border bg-gray-50 rounded-md shadow-md font-semibold hover:shadow-xl transition-all hover:scale-105 text-sm '>
                💎 Premium: {HandleData.filter((item) => item.membership === 'Premium').length}
            </div>

            <div className='p-1 border bg-gray-50 rounded-md shadow-md font-semibold hover:shadow-xl transition-all hover:scale-105 text-sm '>
                ⭐ VIP: {HandleData.filter((item) => item.membership === 'VIP').length}
            </div>

            <div className='p-1 border bg-gray-50 rounded-md shadow-md font-semibold hover:shadow-xl transition-all hover:scale-105 text-sm '>
                🆓 Free: {HandleData.filter((item) => item.membership === 'Free').length}
            </div>
        </div>
    )
}

export default DynamicData