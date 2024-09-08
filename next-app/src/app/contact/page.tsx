import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'

interface CardProps {
    resource: {
        name: string;
        designation: string;
        github: string;
        linkedin: string;
        gmail: string;
    }
}

const Card = ({ resource }: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 p-10 border-2 border-blue-theme rounded-md bg-modal-theme drop-shadow-md shadow-lg shadow-blue-theme z-10'>
            <UserCircleIcon className='size-32 text-white' />
            <div className='flex items-center justify-center flex-col w-full gap-3'>
                <div className='text-white font-bold uppercase tracking-wider text-[1.25rem] text-center'>{resource.name}</div>
                <div className='text-blue-theme font-semibold italic text-sm'>{resource.designation}</div>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <hr className='border-0 w-full h-[1px] mt-5 mb-3 bg-blue-theme' />
                <div className='flex items-center justify-center w-full gap-4 mt-2'>
                    <Link href={resource.github} target='_blank'>
                        <GitHubLogoIcon className='cursor-pointer size-12 text-white border-blue-theme border-2 rounded-full p-2 transition duration-200 ease-in-out hover:-translate-y-2' />
                    </Link>
                    <Link href={resource.linkedin} target='_blank'>
                        <LinkedInLogoIcon className='size-12 cursor-pointer text-white border-blue-theme border-2 rounded-full p-2 transition duration-200 ease-in-out hover:-translate-y-2' />
                    </Link>
                    <Link href={resource.gmail} target='_blank'>
                        <EnvelopeIcon className='size-12 cursor-pointer text-white border-blue-theme border-2 rounded-full p-2 transition duration-200 ease-in-out hover:-translate-y-2' />
                    </Link>
                </div>
            </div>
        </div>
    );
}


const resources = [
    {
        name: 'Srinjoy Sur',
        designation: 'Web Developer / DevOps',
        github: 'https://github.com/SrinjoySur',
        linkedin: 'https://www.linkedin.com/in/srinjoy-sur/',
        gmail: 'srinjoysur@gmail.com'
    },
    {
        name: 'Vikramaditya Singh',
        designation: 'AI/ML Developer',
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/in/vikramaditya-singh-376bab247/',
        gmail: '@gmail.com'
    },
    {
        name: 'Ankit Kumar',
        designation: 'Blockchain Developer',
        github: 'https://github.com/Beaston88',
        linkedin: 'https://www.linkedin.com/in/ankit-kumar-2a745b238/',
        gmail: 'barnwalankit999@gmail.com'
    },
    {
        name: 'Tanisha Basu',
        designation: 'AI/ML Developer',
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/in/tanisha-basu-870b31252/',
        gmail: 'basutanisha1@gmail.com'
    },
    {
        name: 'Adarsh Rout',
        designation: 'AI/ML Developer',
        github: 'https://github.com/AdarshRout',
        linkedin: 'https://www.linkedin.com/in/',
        gmail: 'adarshrout321@gmail.com'
    },
    {
        name: 'Sambit Mondal',
        designation: 'Web Developer',
        github: 'https://github.com/Sambit-Mondal',
        linkedin: 'https://www.linkedin.com/in/sambitm02/',
        gmail: 'sambitmondal2005@gmail.com'
    }
]


const Contact = () => {
    return (
        <div className="bg-background-theme w-full min-h-screen pt-28 px-10 pb-12 overflow-hidden overflow-y-auto">
            <div className="flex flex-col items-center justify-center gap-2 relative">
                <div className="font-extrabold uppercase text-4xl tracking-widest text-white">TEAM PAKHALA BYTES</div>
                <div className="font-semibold text-xl tracking-wider text-blue-theme flex items-center justify-center gap-3">Empowering Solutions, Byte by Byte</div>
            </div>
            <div className='w-full h-full grid grid-cols-3 gap-24 mt-14'>
                {resources.map((resource, index) => (
                    <Card resource={resource} />
                ))}
            </div>
        </div>
    )
}

export default Contact