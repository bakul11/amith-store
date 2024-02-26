"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const tendingData = [
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/cNg36Yn/ss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/yyxgX8n/sss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/gjDcNMP/s.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/262JCfH/ssss.png',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/cNg36Yn/ss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/yyxgX8n/sss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/gjDcNMP/s.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/262JCfH/ssss.png',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/cNg36Yn/ss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/yyxgX8n/sss.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/gjDcNMP/s.jpg',
        oldPrice: 52,
        newPrice: 2,
    },
    {
        title: 'Easter Bunny Split Monogra',
        photo: 'https://i.ibb.co/262JCfH/ssss.png',
        oldPrice: 52,
        newPrice: 2,
    }
]







const Trending = () => {
    const [tending, setTending] = useState(tendingData);

    return (
        <section className='tending-section'>
            <div className="px-5 lg:px-12 py-5">
                <h2 className='font-bold text-slate-800 text-xl my-5'>Trending right now</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                    {
                        tending && tending?.map((item, index) => {
                            const { title, newPrice, oldPrice, photo } = item;

                            return (
                                <div className="bg-white shadow-sm rounded-md hover:translate-y-2 duration-[0.5s] transition-all ease-in-out" key={index}>
                                    <Image src={photo} alt='design logo' className='object-cover rounded-t-md w-full' height={500} width={500} />
                                    <div className="tending-content p-3">
                                        <div className="tending-title">
                                            <div className="flex items-center justify-between">
                                                <h3 className='main-title my-3 hover:text-green-500 cursor-pointer'>{title}</h3>
                                                <FaCheckCircle className='text-green-500' />
                                            </div>
                                        </div>
                                        <div className="price ">
                                            <div className="flex items-center justify-between">
                                                <p className='text-slate-800 text-[14px]'>In <span className='text-blue-500'>fonts</span></p>
                                                <h4 className='text-rose-500 font-semibold'>$ {newPrice}.00 <span className='text-slate-800'><del>$ {oldPrice}.00</del></span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Trending;