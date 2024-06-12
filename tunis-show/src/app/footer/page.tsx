"use client";

import Link from 'next/link';
import Image from 'next/image';
import LogoLink from "../components/LogoLink";
import styles from '../styles/style.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={`flex flex-col justify-center items-center p-24 text-white ${styles.maincolor}`}>
        <span className={`text-sm mb-8 tracking-wider ${styles.family}`}>35,000+ already joined</span>
        <h2 className={`text-md sm:text-4xl mb-5 text-center ${styles.family}`}>Stay up-to-date with what <br /> we’re doing</h2>
        <div className="flex flex-wrap justify-center items-center">
          <input type="email" className='p-1 w-72 mb-5' placeholder="Enter your email address" />
          <a className={`ml-5 sm:mb-5 p-2 rounded-lg ${styles.button}`} href="#">Contact Us</a>
        </div>
      </div>

      <div className={`flex flex-col items-center justify-between text-white py-8 sm:flex-row ${styles.color}`}>
        <ul className="flex flex-col sm:flex-row sm:absolute left-0 ml-16 sm:ml-0 sm:left-auto sm:space-x-6 items-center space-y-4 sm:space-y-0">
          <li>
            <LogoLink />
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <Link className={styles.font} href="/">FEATURES</Link>
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <Link className={styles.font} href="/">PRICING</Link>
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <Link className={styles.font} href="/">CONTACT</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center mt-5 ml-16 sm:mt-0 sm:absolute sm:right-16">
          <Image src="/images/icon-facebook.svg" className="mr-4 sm:mr-10" alt="Facebook logo" width={25} height={25} />
          <Image src="/images/icon-twitter.svg" alt="Twitter logo" width={25} height={25} />
        </div>
      </div>
    </footer>
  );
}
