"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const menuData = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'graphices',
        path: '/graphices'
    },
    {
        title: 'tools',
        path: '/tools'
    },
    {
        title: 'products',
        path: '/products'
    },
    {
        title: 'fonts',
        path: '/fonts'
    },
    {
        title: 'design',
        path: '/design'
    },
    {
        title: 'services',
        path: '/services'
    },
    {
        title: 'logo',
        path: '/logo'
    },
    {
        title: 'contact us',
        path: '/contact'
    }
]



const NavBar = () => {
    const pathName = usePathname();
    return (
        <div className='bg-white shadow-md'>
            <div className="px-4 lg:px-12 py-5">
                <div className="flex items-center justify-between gap-2">
                    {
                        menuData && menuData?.map((item, index) => {
                            const { title, path } = item;
                            return (
                                <Link href={`${path}`} key={index} className={`capitalize p-2 ${path === pathName ? 'bg-blue-500 rounded-md text-white' : ''}`}>{title}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;