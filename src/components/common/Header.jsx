import React, { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { useWindowSize } from "usehooks-ts";
import Items from './Items';
import ToggleIcon from '../../assets/toggle/toogle'

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    const { width } = useWindowSize();

    useEffect(() => {
        width >= 1020 && setOpenNav(false)
    }, [width]);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 ">
            <Items />
        </ul>
    );

    return (
        <>
            <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="p-2.5 flex items-center">
                        <h1 className="font-bold text-xl">Untitled UI</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            <ToggleIcon open={openNav} />
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </>
    );
}