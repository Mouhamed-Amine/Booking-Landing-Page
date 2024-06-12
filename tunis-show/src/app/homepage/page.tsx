"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './home.module.css';
import { gsap } from 'gsap';

export default function Home() {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    // Utility function to split text into spans
    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="char">
                {char}
            </span>
        ));
    };

    useEffect(() => {
        if (h1Ref.current) {
            const chars = h1Ref.current.querySelectorAll('.char');
            gsap.fromTo(chars,
                { 
                    opacity: 0, 
                    y: 20 
                }, // Initial state: opacity 0, 20px below
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: 'power3.out', 
                    stagger: 0.1 
                } // Final state: opacity 1, original position, staggered animation
            );
        }
    }, []);

    return (
        <>
            {/* Page content */}
            <div className="flex relative flex-wrap-reverse justify-around items-center p-10">
                <div className='lg:w-1/4 space-y-8'>
                    <h1 ref={h1Ref} className={`text-5xl ${style.family}`}>
                        {splitText('A Simple Bookmark Manager')}
                    </h1>
                    <p className={`text-md text-gray-400`}>
                        A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className='flex flew-wrap'>
                        <button className={` ${style.btnleft} px-3 py-1 m-2 text-white rounded-md`}>Get it on Chrome</button>
                        <button className={` ${style.btnright} px-3 py-1 m-2 text-white rounded-md`}>Get it on Firefox</button>  
                    </div>
                </div>
                <Image src="/images/illustration-hero.svg" alt="main-hero" width={700} height={600} />
                <div className={` ${style.blob} absolute right-0 top-40 -z-10 w-96 h-96 md:w-1/3 max-sm:w-1/2 `}></div>
            </div>
        </>
    );
}
