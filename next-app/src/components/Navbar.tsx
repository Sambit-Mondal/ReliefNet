'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActiveTab('Home');
                break;
            case '/our-services':
                setActiveTab('Our Services');
                break;
            case '/key-features':
                setActiveTab('Key Features');
                break;
            case '/contact-us':
                setActiveTab('Contact Us');
                break;
            case '/profile':
                setActiveTab('My Profile');
                break;
            default:
                setActiveTab('');
                break;
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
                <Link href='/'>
                    ReliefNet
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
                        <Link href='/our-services'>
                            Get Services
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Key Features' ? 'active' : ''}`}
                    >
                        <Link href='/key-features'>
                            Key Features
                        </Link>
                    </li>
                    <li
                        className={`nav-item cursor-pointer ${activeTab === 'Contact Us' ? 'active' : ''}`}
                    >
                        <Link href='/contact-us'>
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