import { RxDotFilled } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react';

const Header = (props) => {
   
    
    return (
        <nav className=" flex items-center justify-between w-full">
            <div className="text-black text-xl mt-2">
                <div className="p-2.5 flex items-center">
                    <RxDotFilled className='text-3xl' />
                    <h1 className="font-bold text-xl">Untitled UI</h1>
                </div>
            </div>
            <ul className="flex items-center p-5">
                <li>
                    <HiOutlineMenuAlt1 className="text-xl" onClick={props.handleClick}/>
                </li>
            </ul>
        </nav>

    )
}

export default Header