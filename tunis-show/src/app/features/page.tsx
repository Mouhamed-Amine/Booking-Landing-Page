'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';
import style from './tabs.module.css';

interface TabItem {
  title: string;
  content: JSX.Element;
}

const tabs: TabItem[] = [
  {
    title: "Simple Bookmarking",
    content: (
      <div className="flex flex-wrap relative justify-around items-center px-16">
        <Image src="/images/illustration-features-tab-1.svg" alt="main-hero" width={700} height={600} />
        <div className={`${style.blob} absolute left-0 top-40 md:top-40 -z-10 w-96 h-96 md:w-1/3 max-sm:w-1/2 transform sm:scale-x-[-2] scale-x-[-3]`}></div>

        <div className="lg:w-1/4 space-y-8">
          <h1 className={`text-5xl ${style.family}`}>Bookmark in one click</h1>
          <p className="text-md text-white sm:text-gray-400">
            Organize your bookmarks however you like. Our simple drag-and-drop interface
            gives you complete control over how you manage your favorite sites.
          </p>
          <div>
            <button className={` bg-white text-black sm:${style.btn} px-3 py-1 m-2 sm:text-white rounded-md`}>More Info </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Speedy Searching",
    content: (
      <div className="flex flex-wrap relative justify-around items-center px-16">
        <Image src="/images/illustration-features-tab-2.svg" alt="main-hero" width={500} height={400} />

        <div className="lg:w-1/4 space-y-8">
          <h1 className={`text-5xl ${style.family}`}>Intelligent search</h1>
          <p className="text-md text-gray-400">
            Our powerful search feature will help you find saved sites in no time at all.
            No need to trawl through all of your bookmarks.
          </p>
          <div>
            <button className={`${style.btn} px-3 py-1 m-2 text-white rounded-md`}>More Info</button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Easy Sharing",
    content: (
      <div className="flex flex-wrap relative justify-around items-center px-16">
        <Image src="/images/illustration-features-tab-3.svg" alt="main-hero" width={500} height={400} />

        <div className="lg:w-1/4 space-y-8">
          <h1 className={`text-5xl ${style.family}`}>Share your bookmarks</h1>
          <p className="text-md text-gray-400">
            Easily share your bookmarks and collections with others. Create a shareable
            link that you can send at the click of a button.
          </p>
          <div>
            <button className={`${style.btn} px-3 py-1 m-2 text-white rounded-md`}>More Info</button>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <div className="features flex flex-col justify-center items-center py-12 mb-10">
      <div className="feature_description flex flex-col items-center justify-center m-5 p-2">
        <h2 className={`text-3xl ${style.family}`}>Features</h2>
        <span className="text-md">
          Our aim is to make it quick and easy for you to access your favorite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </span>
      </div>
      <TabGroup className="flex flex-col md:items-center md:justify-center">
        <TabList className="flex flex-col sm:flex-row flex-wrap justify-between md:space-x-24 items-center md:border-b-2">
          {tabs.map((tab, index) => (
            <Tab key={index}>
              {({ selected }) => (
                <button
                  className={`py-2 border-b-2 ${
                    selected ? 'font-medium border-b-red-400' : ''
                  } hover:-translate-y-1 hover:scale-110 hover:font-medium hover:border-b-red-400`}
                >
                  {tab.title}
                </button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-5 w-full transition-all">
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              <div>{tab.content}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
