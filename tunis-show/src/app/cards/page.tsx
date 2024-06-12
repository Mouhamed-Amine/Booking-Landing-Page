'use client'
import style from './cards.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

export default function BrowserCards() {
  // Create refs for each card
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP animation for cards
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100, y: index * 20 }, // Initial state (off-screen to the right and staggered vertically)
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger animation start times
          ease: 'power3.out',
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-col mx-auto text-center">
        <h1 className={`text-xl md:text-3xl ${style.family}`}>Download the extension</h1>
        <span className="text-md lg:text-xl text-gray-400 w-2/3 mt-6 mb-10 mx-auto">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favorite you’d like us to prioritize.
        </span>
      </div>

      <div className="flex flex-row justify-center flex-wrap">
        <div
          ref={(el) => { cardRefs.current[0] = el!; }}
          className="flex flex-col items-center p-10 bg-white border border-gray-200 rounded-lg shadow-2xl mt-6 mb-10 md:mr-6"
        >
          <a href="#">
            <Image className="rounded-t-lg" src="/images/logo-chrome.svg" alt="Chrome logo" width={128} height={128} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Add to Chrome</h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">Minimum version 62</p>
            <a
              href="#"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${style.color}`}
            >
              Add & Install Extension
            </a>
          </div>
        </div>

        <div
          ref={(el) => { cardRefs.current[1] = el!; }}
          className="flex flex-col items-center p-10 bg-white border border-gray-200 rounded-lg shadow-2xl mt-6 mb-10 md:mr-6"
        >
          <a href="#">
            <Image className="rounded-t-lg" src="/images/logo-firefox.svg" alt="Firefox logo" width={128} height={128} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Add to Firefox</h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">Minimum version 55</p>
            <a
              href="#"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${style.color}`}
            >
              Add & Install Extension
            </a>
          </div>
        </div>

        <div
          ref={(el) => { cardRefs.current[2] = el!; }}
          className="flex flex-col items-center p-10 bg-white border border-gray-200 rounded-lg shadow-2xl mt-6 mb-10"
        >
          <a href="#">
            <Image className="rounded-t-lg" src="/images/logo-opera.svg" alt="Opera logo" width={128} height={128} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Add to Opera</h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">Minimum version 46</p>
            <a
              href="#"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${style.color}`}
            >
              Add & Install Extension
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
