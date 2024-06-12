'use client';

import { ReactNode, useState } from 'react';
import style from './qt.module.css';
import Image from 'next/image';

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  id: number;
}

const Accordionitem: React.FC<AccordionItemProps> = ({ title, content, id }) => {
    //State Management & Hooks
    const [isOpen, setIsOpen] = useState(false);
    //Toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between mx-auto w-full md:w-1/3 p-5 border-t-2 border-gray-100 font-semibold text-black  focus:ring-4 focus:ring-gray-200 00  hover:bg-gray-100  gap-3 ${isOpen ? 'rounded-t-xl' : ''}`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span className='text-black'>{title}</span>
          <svg
            className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div id={`accordion-collapse-body-${id}`} aria-labelledby={`accordion-collapse-heading-${id}`}>
          <div className="p-5 border border-b-0 md:w-1/3 mx-auto ">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is Bookmark?",
      content: (
        <>
          <p className="mb-2 text-gray-800 ">
            Bookmark is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "How can I request a new browser?",
      content: (
        <>
          <p className="mb-2 text-gray-800">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. </p>
          <p className="text-gray-800">
            Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Is there a mobile app?",
      content: (
        <>
          <p className="mb-2 text-gray-800">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
          urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
          sollicitudin ex et ultricies bibendum.
          </p>
        
          <p className="mb-2 text-gray-800">Learn more about these technologies:</p>
          <ul className="pl-5 text-gray-800 list-disc ">
            <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
            <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
          </ul>
        </>
      ),
    },
    {
        id: 4,
      title: "What about other Chromium browsers?",
      content: (
        <>
          <p className="mb-2 text-gray-800">
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
            vitae neque eget nisl gravida pellentesque non ut velit.
          </p>
        
         </>
      ),
    }
  ];

  return (

    <div className='flex flex-col sm:m-24'>
        <div className="flex flex-col mx-auto text-center mb-10">
        <h1 className={`text-xl md:text-3xl ${style.family} `}> Frequently Asked Questions </h1>
        <span className="text-md lg:text-xl text-gray-800 w-2/3 mt-6 mb-10 mx-auto"> Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.</span>
        </div>
    <div id="accordion-collapse" data-accordion="collapse">
      {accordionData.map((item) => (
        <Accordionitem key={item.id} id={item.id} title={item.title} content={item.content} />
        ))}
        </div>
        <button className={` rounded p-2 my-5 mx-auto ${style.maincolor}`}>More info</button>
    </div>   
  );
};

export default Accordion;
