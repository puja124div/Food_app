import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const Navbar = () => {

const [nav,setNav]=useState(false)

    return (
        <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
            {/* leftside */}
            <div className="flex items-center  ">
                <div onClick={()=>setNav(!nav)} className="cursor-pointer"><AiOutlineMenu size={30} /></div>
                <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl ">Best  <span className="font-bold">EATS</span></h1>
                <div className="hidden lg:flex bg-gray-300  rounded-full  text-[14px] items-center">
                    <p className="bg-black p-2 text-white rounded-full">Delivery</p>
                    <p className="p-2">PickUp</p>
                </div>
            </div>

            {/* search */}
            <div className="flex rounded-full px-2 items-center bg-slate-300 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent focus:outline-none  p-2 w-full " type="text" placeholder="search food"></input>
            </div>
            {/* cart */}
            <button className=" rounded-full hidden md:flex ">
                <BsFillCartFill className="mr-2" size={20} />Cart
            </button>
            {/* mobile menu */}
            {/* overlay */}
            {nav ? <div className="bg-black/80 w-full fixed h-screen z-10 top-0 left-0"></div> :'' }
           
            {/* side drawe menu */}
            <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose 
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={()=>setNav(!nav)}
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery size={25} className="mr-4" />
                            Orders
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdFavorite size={25} className="mr-4" />
                            Favourites
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaWallet size={25} className="mr-4" />
                            Wallet
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdHelp size={25} className="mr-4" />
                            Help
                        </li>
                        <li className="text-xl py-4 flex">
                            <AiFillTag size={25} className="mr-4" />
                            Promotions
                        </li>
                        <li className="text-xl py-4 flex">
                            <BsFillSaveFill size={25} className="mr-4" />
                            Best One
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaUserFriends size={25} className="mr-4" />
                            Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )


}
export default Navbar;