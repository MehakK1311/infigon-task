import React from 'react';
import { AiOutlineFlag, AiOutlineTeam, AiOutlineCreditCard } from 'react-icons/ai'
import { FiCreditCard } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BsThreeDots, BsStars } from 'react-icons/bs'
import { FaConnectdevelop } from 'react-icons/fa'

export default function Items() {
    return (
        <>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer    text-gray-800">
                <AiOutlineFlag className='text-2xl' />
                <span className="text-md ml-4 font-bold">My Details</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <CgProfile className='text-2xl' />
                <span className="text-md ml-4 font-bold">Profile</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <BsThreeDots className='text-2xl' />
                <span className="text-md ml-4 font-bold">Password</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <BsStars className='text-2xl' />
                <span className="text-md ml-4 font-bold">Appearance</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <AiOutlineTeam className='text-2xl' />
                <span className="text-md ml-4 font-bold">Team</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <AiOutlineCreditCard className='text-2xl' />
                <span className="text-md ml-4 font-bold">Billing</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <FiCreditCard className='text-2xl' />
                <span className="text-md ml-4 font-bold">Application</span>
            </div>
            <div className="p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200  text-gray-800">
                <FaConnectdevelop className='text-2xl' />
                <span className="text-md ml-4 font-bold">API</span>
            </div>
        </>
    )

}