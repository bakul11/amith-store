"use client"
import React from 'react';
import Link from 'next/link';

const Promotions = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-cyan-400'>
            <div className="px-5 lg:px-12 text-center py-24">
                <h3 className='text-3xl font-bold'>Be <span className='text-white'>the first</span> to hear about our latest deals, <br /> offers & promotions</h3>
                <div className="subcribe relative capitalize my-8 lg:w-1/2 mx-auto">
                    <form action="">
                        <input type="email" placeholder='Email Address' className='outline-none p-3 focus:ring-white focus:ring-1 rounded-md ring-0 w-full ring-gray-400 placeholder-gray-400 text-[14px]' required/>
                        <input type="submit" value="Subscribe Now" className='bg-gradient-to-r from-orange-400 to-red-400 rounded-r-md text-white px-5 py-2 cursor-pointer absolute right-0 top-0 bottom-0' />
                    </form>
                </div>

                <div className="flex items-center gap-2 justify-center">
                    <input type="checkbox" id="sss" className='text-4xl'/>
                    <label htmlFor="sss" className="flex items-center gap-2 justify-center flex-wrap">
                        <p className='text-gray-200'> By clicking subscribe you agree to the Design Bundles </p>
                        <Link href='/conditions' className='text-gray-100 text-[14px]'>Terms & Conditions</Link>
                        <p className='text-gray-200'>&</p>
                        <Link href='/conditions' className='text-gray-100 text-[14px]'>Privacy Policy</Link>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Promotions;