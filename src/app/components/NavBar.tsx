'use client'
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";


export default function NavBar() {

    const [optionsHidden, setOptionsView] = useState<boolean>(true);
    <div className="flex gap-3">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/shop'>Shop</Link>
        <Link href='/contact'>Contact</Link>
    </div>

    const optionsDisplay = optionsHidden ? 'hidden' : 'block';



    const toggleDropMenu = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.preventDefault()
        setOptionsView(!optionsHidden);
    }

    return (
        <nav className="w-full fixed top-0 left-0 px-2 py-5 flex items-center justify-between ">
            <h2 className=" max-w-1/2 sm:w-1/4 text-2xl font-bold  ">Classy Canine Collection</h2>
            <div className="hidden sm:flex gap-3">
                <Link href='/' className=" transition-colors duration-500 hover:text-yellow-400 ">Home</Link>
                <Link href='/about' className=" transition-colors duration-500 hover:text-yellow-400">About</Link>
                <Link href='/shop' className=" transition-colors duration-500 hover:text-yellow-400">Shop</Link>
                <Link href='/contact' className=" transition-colors duration-500 hover:text-yellow-400">Contact</Link>
            </div>
            <div className="flex justify-between sm:justify-end items-center w-1/3 sm:w-1/4">
                <p className=" text-xl  ">Bag(0)</p>
                <MdMenu className=" sm:hidden text-4xl" onClick={toggleDropMenu} />

            </div>
            <div className={`${optionsDisplay} text-4xl z-50 fixed w-full h-full top-0 left-0 bg-black`}>
                <MdOutlineRestaurantMenu className=" float-right mt-2 mr-2" onClick={toggleDropMenu} />
                <Link className="block ml-2 mt-2 mb-2 text-left" href='/'>Home</Link>
                <Link className="block ml-2 mb-2 text-left" href='/about'>About</Link>
                <Link className="block ml-2 mb-2 text-left" href='/sop'>Shop</Link>
                <Link className="block ml-2 mb-2 text-left" href='/contact'>Contact</Link>
            </div>
        </nav>
    )
}