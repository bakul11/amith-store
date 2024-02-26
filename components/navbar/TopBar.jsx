"us client"
import Link from 'next/link';
import React from 'react';
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { BiSolidShoppingBags } from 'react-icons/bi';



const TopBar = () => {
    return (
        <div className='top-section bg-slate-800'>
            <div className="px-4 lg:px-12">
                <div className="flex items-center justify-between">
                    <div className="login-box mb-5">
                        <Link href='/' className='font-bold text-slate-800 capitalize flex items-center gap-2'>
                            <BiSolidShoppingBags className='text-white text-7xl' />
                            <span className='text-2xl font-bold text-white'>Amith store</span>
                        </Link>
                    </div>
                    <div className="searchbar">
                        <div className="subcribe relative capitalize my-8 w-full">
                            <form action="">
                                <input type="text" placeholder='Email Address' className='outline-none p-3 focus:ring-white focus:ring-1 rounded-md ring-1 w-full block ring-blue-400 placeholder-gray-400 text-[14px]' required />
                                <button className='bg-orange-400 rounded-r-md text-white px-5 py-2 cursor-pointer absolute right-0 top-0 bottom-0'>Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="card-login w-[200px]">
                        <div className="flex items-center gap-5">
                            <div className="cart-button">
                                <Link href='/cart'>
                                    <MdShoppingCartCheckout className='text-2xl text-white' />
                                </Link>

                            </div>
                            <div className="loginBtn">
                                <Link href='/login' className='bg-blue-400 text-white rounded-lg p-2 inline-block'>
                                    <div className="flex items-center gap-2">
                                        <FaUserLock className='text-md' />
                                        Login
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;