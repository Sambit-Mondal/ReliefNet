'use client';
import React from "react";
import Prepare from "@/components/Home/Prepare";
import Respond from "@/components/Home/Respond";
import Rebuild from "@/components/Home/Rebuild";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Features from "@/components/Home/Features";

const HomePage = () => {

  return (
    <div className="bg-background-theme w-full min-h-screen pt-28 px-10 pb-8 overflow-hidden overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-2 relative">
        <div className="font-extrabold uppercase text-4xl tracking-widest text-white">ReliefNet</div>
        <div className="font-semibold text-xl tracking-wider text-blue-theme flex items-center justify-center gap-3"><p>Prepare.</p><p> Respond.</p><p> Rebuild.</p></div>
        <Link href="/services" className="absolute right-0 ">
          <button className="flex items-center justify-center gap-2 my-auto py-3 text-white font-bold text-lg border-2 border-blue-theme rounded-md px-6 transition duration-200 ease-in-out hover:bg-gray-700">
            Get Started
            <ArrowRightCircleIcon className="size-8" />
          </button>
        </Link>
      </div>
      <div className="w-full flex items-center justify-between gap-5 mt-10">
        <Prepare />
        <Respond />
        <Rebuild />
      </div>
      <div className="mt-24">
        <div className="text-white font-bold text-3xl tracking-wider">FEATURES</div>
        <hr className='border-0 w-full h-[2px] mt-5 bg-blue-theme' />
      </div>
      <Features />
    </div>
  );
};

export default HomePage;