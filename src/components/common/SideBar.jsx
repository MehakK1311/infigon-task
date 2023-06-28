import React from 'react';
import { RxDotFilled } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useWindowSize } from "usehooks-ts";
import Items from './Items';
const SideBar = (props) => {

  const { width } = useWindowSize();

  return (
    <div className={`bg-white sidebar fixed top-0 bottom-0 lg:left-0 py-1 pl-4 w-2/12 overflow-y-auto text-center z-10`}>
      <div className="text-gray-800 text-xl mt-2">
        <div className="p-2.5 flex items-center">
          <RxDotFilled className='text-3xl' />
          <h1 className="font-bold text-xl">Untitled UI</h1>
          <AiOutlineClose className={`text-md cursor-pointer ml-28 ${width >= 1020 ? 'hidden' : ''}`} onClick={props.handleClick} />
        </div>
      </div>
      <div className="p-2 flex items-center rounded-md -ml-6 text-white mb-2">
        <span className="text-lg ml-4 text-gray-800 font-bold ">Settings</span>
      </div>
      <div className="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-100  text-gray-800 border-gray-300 border-2">
        <FiSearch className='text-2xl' />
        <input type="text" placeholder="Search" className="text-md ml-4 w-full bg-transparent focus:outline-none" />
      </div>
      <Items />
    </div>


  );
};

export default SideBar