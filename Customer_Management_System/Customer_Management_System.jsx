import React, { useMemo, useState } from 'react'
import SidePanel from './components/SidePanel'
import Search_Filter_Panel from './components/Search_Filter_Panel'
import CustomerList from './components/CustomerList.jsx'
import AddCustomer from './components/AddCustomer.jsx'
import customers from './components/Data.jsx'
import DynamicData from './components/DynamicData.jsx'
import { toast, ToastContainer } from 'react-toastify';
import UseLocalStorage from '../Custom__Hook/useLocalStorage.jsx'
const Customer_Management_System = () => {
    const [addCustomer, setAddCustomer] = UseLocalStorage('customers', customers);

    const [search, setSearch] = useState('')
    const [filterdata, setFilterData] = useState('')
    const [sortData, setSortData] = useState('')
    const [openAddCustomer, setOpenAddCustomer] = useState(false);

    const HandleData = useMemo(() => {
        let usedata = [...addCustomer];

        if (search) {
            usedata = usedata.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        }
        if (filterdata === 'ALL') {
            return usedata;
        }
        if (filterdata === 'VIP') {
            usedata = usedata.filter((item) => item.membership === 'VIP');
        }
        if (filterdata === 'Premium') {
            usedata = usedata.filter((item) => item.membership === 'Premium');
        }
        if (filterdata === 'FREE') {
            usedata = usedata.filter((item) => item.membership === 'FREE');
        }
        if (sortData === 'A to Z') {
            usedata = usedata.sort((a, b) => a.name.localeCompare(b.name)) // to sort A to Z
        }
        if (sortData === 'Z to A') {
            usedata = usedata.sort((a, b) => b.name.localeCompare(a.name)); // to sort Z to A
        }
        return usedata;
    }, [search, addCustomer, filterdata, sortData]);

    const HandleDelete = (id) => {
        setAddCustomer(prevcustomer => prevcustomer.filter((item) => item.id !== id));
        toast.warn('Customer Deleted Successfully!');
    }
    return (
        <div className='flex'>
            <div className='hidden sm:block'>
                <SidePanel />
            </div>
            <ToastContainer position="top-center" />
            <div className='p-3'>
                {/* Add customer */}
                <div className='flex justify-between'>
                    <h4 className='font-semibold'>Customer List</h4>
                    <AddCustomer setAddCustomer={setAddCustomer} openAddCustomer={openAddCustomer} setOpenAddCustomer={setOpenAddCustomer} />
                </div>

                {/* Dynamic Summary */}
                <DynamicData HandleData={HandleData} />

                {/* Search and Filter */}
                <div className='mt-4'>
                    <Search_Filter_Panel sortData={sortData} setSortData={setSortData} search={search} setSearch={setSearch} filterdata={filterdata} setFilterData={setFilterData} />
                </div>

                {/* Customer List */}
                <div className='mt-2'>
                    <CustomerList addCustomer={HandleData} HandleDelete={HandleDelete} />
                </div>
            </div>
        </div>
    )
}

export default Customer_Management_System