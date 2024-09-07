'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        if (pathname === '/') {
            setActiveTab('Home');
        } else if (pathname.startsWith('/services')) {
            setActiveTab('Our Services');
        } else if (pathname === '/features') {
            setActiveTab('Key Features');
        } else if (pathname === '/contact') {
            setActiveTab('Contact Us');
        } else if (pathname === '/profile') {
            setActiveTab('My Profile');
        } else {
            setActiveTab('');
        }
    }, [pathname]);

    const handleSignout = async () => {
        try {
            await axios.post('/api/signout');
            router.push('/auth');
        } catch (error) {
            console.error('Signout Error:', error);
        }
    };

    return (
        <div className='text-white bg-background-theme w-full fixed top-0 flex items-center justify-between p-5 px-7 z-50'>
            <div className='text-2xl font-extrabold tracking-wider'>
                <Link href='/' className='flex items-center justify-center gap-3'>
                    <Image
                        src='/Logo.png'
                        alt='ReliefNet'
                        className='size-11 rounded-full'
                        width={200}
                        height={200}
                    />
                    <p>ReliefNet</p>
                </Link>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <ul className='flex items-center justify-center gap-8'>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Home' ? 'active' : ''}`}
                    >
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Our Services' ? 'active' : ''}`}
                    >
                        <Link href='/services'>
                            Get Services
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Key Features' ? 'active' : ''}`}
                    >
                        <Link href='/features'>
                            Key Features
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Contact Us' ? 'active' : ''}`}
                    >
                        <Link href='/contact'>
                            Contact Us
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'My Profile' ? 'active' : ''}`}
                    >
                        <Link href='/profile'>
                            My Profile
                        </Link>
                    </li>
                </ul>
                <button className="border-2 border-blue-theme py-2 px-8 rounded-md text-white transition duration-200 ease-in-out hover:bg-red-600" onClick={handleSignout}>
                    Signout
                </button>
            </div>
        </div>
    );
}

export default Navbar;