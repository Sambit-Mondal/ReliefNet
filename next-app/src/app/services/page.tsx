import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  resource: {
    image: string;
    title: string;
    description: string;
    url: string;
  };
}

const Card = ({ resource }: CardProps) => {
  return (
    <div className='flex items-center justify-center gap-10 w-full p-10 border-2 border-blue-theme rounded-md transition duration-200 ease-in-out shadow-lg bg-modal-theme drop-shadow-sm shadow-blue-theme hover:drop-shadow-sm hover:shadow-2xl hover:shadow-blue-theme z-10 cursor-pointer'>
      <Image
        src={resource.image}
        alt={resource.title}
        className='rounded-full size-[9.5rem]'
        width={140}
        height={140}
      />
      <div className='flex flex-col h-full justify-center gap-6'>
        <div className='font-bold text-white text-2xl'>{resource.title}</div>
        <div className='font-normal text-white text-[1.05rem]'>
          {resource.description}
        </div>
      </div>
    </div>
  )
}

const resources = [
  {
    image: '/Disaster-Analysis.jpeg',
    title: 'Disaster Analysis',
    description: 'Our system will provide real-time analysis of disaster data to help in the prediction and management of disasters.',
    url: '/services/disaster-analysis'
  },
  {
    image: '/Victim-Detection.png',
    title: 'Victim Detection',
    description: 'Utilize advanced technology to detect and locate victims in disaster-stricken areas, ensuring rapid response.',
    url: '/services/victim-detection'
  },
  {
    image: '/Insurance-Claims.png',
    title: 'Insurance Claims',
    description: 'Streamline and track insurance claims processing with transparent, blockchain-based solutions for quick settlements.',
    url: '/services/insurance-claim'
  },
  {
    image: '/Chatbot.png',
    title: 'Offline Chatbot',
    description: 'Provide real-time assistance to affected individuals via an offline-capable chatbot for disaster information and support.',
    url: '/services/offline-chatbot'
  }
]


const Services = () => {
  return (
    <div className='bg-background-theme w-full min-h-screen pt-28 px-10 pb-16 relative overflow-hidden overflow-y-auto'>
      <div className='flex flex-col gap-2 items-center sticky top-0'>
        <div className='font-bold text-center uppercase text-white text-3xl'>Our Services</div>
        <div className='font-normal text-[1rem] text-white rounded-md p-4 text-center'>
          We serve as an integrated disaster management system designed to assist government agencies, NGOs, and communities in planning for, responding to, and recovering from disasters. It will combine predictive analytics, real-time communication, and resource optimization to minimize risks and enhance disaster preparedness and response.
        </div>
      </div>
      <hr className='border-0 bg-blue-theme h-[1px] mt-3 mb-12' />
      <div className='grid grid-cols-2 gap-x-20 gap-y-16'>
        {resources.map((resource, index) => (
          <Link href={resource.url} key={index}>
            <Card resource={resource} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services;