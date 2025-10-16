import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { toast } from 'react-toastify';

const AddCustomer = ({ openAddCustomer, setOpenAddCustomer, setAddCustomer }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const Handleform = (event) => {
        event.preventDefault();
        const NewCustomer = {
            id: Date.now(),
            name: name,
            email: email,
            joinDate: date,
            membership: selectedValue,
        }

        setAddCustomer((prev) => [...prev, NewCustomer]);
        toast.success('Customer Added Successfully!');

        setOpenAddCustomer(false);

        setName('');
        setEmail('');
        setDate('');
        setSelectedValue('');
    }

    return (
        <div className='relative'>
            <div
                onClick={() => setOpenAddCustomer(true)}
                className='flex select-none justify-center items-center py-2 px-2 cursor-pointer gap-1 text-sm bg-[#8B4513] rounded-md font-semibold text-white'>
                <FaPlus />
                Add Customer
            </div>
            {
                openAddCustomer === true ?
                    <div className='flex items-center justify-center fixed z-10 inset-0'>
                        <div
                            onClick={() => setOpenAddCustomer(false)}
                            className='absolute backdrop-blur-md inset-0 bg-opacity-30 p-2 cursor-pointer font-semibold'>
                        </div>
                        <form onSubmit={Handleform} className='border p-3 rounded-md flex flex-col z-20 relative gap-3 bg-white'>
                            <div className='flex flex-col'>
                                Name:
                                <input
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text" className='font-semibold p-1 px-2 focus:outline-none rounded-md border' />
                            </div>
                            <div className='flex flex-col'>
                                Email:
                                <input
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" className='font-semibold p-1 px-2 focus:outline-none rounded-md border' />
                            </div>
                            <select
                                required
                                value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)} className='p-1 flex items-center text-sm right-9 rounded-md border bg-white focus:outline-none'>
                                <option
                                    className='hover:bg-gray-300 rounded-md p-2 '>Membership Type:</option>
                                <option
                                    className='hover:bg-gray-300 rounded-md p-2'>ALL</option>
                                <option
                                    className='hover:bg-gray-300 rounded-md p-2'>Free</option>
                                <option
                                    className='hover:bg-gray-300 rounded-md p-2'>Premium</option>
                                <option
                                    className='hover:bg-gray-300 rounded-md p-2'>VIP</option>
                            </select>
                            <div className='flex flex-col'>
                                Join Date:
                                <input
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                    className='p-1 border rounded-md' />
                            </div>
                            <div className='flex justify-end gap-3'>
                                <button
                                    className='border p-1 font-semibold bg-gray-50 cursor-pointer rounded'
                                    onClick={() => setOpenAddCustomer(false)}>Cancel</button>
                                <button
                                    className='border p-1 font-semibold bg-blue-400 cursor-pointer rounded '
                                    type='submit' >Save</button>
                            </div>
                        </form>
                    </div>
                    : ''}
        </div>
    )
}

export default AddCustomer