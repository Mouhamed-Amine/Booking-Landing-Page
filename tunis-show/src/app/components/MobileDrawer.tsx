import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/style.module.css'
import Image from 'next/image';


interface MobileDrawerProps {
    isOpen: boolean;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
  }


const  MobileDrawer: React.FC<MobileDrawerProps>= ({ isOpen, onClose })=>{
    return (
      <div
        className={`fixed ${styles.drawerbackground} flex flex-col justify-center z-10 top-0 right-0 h-full w-full text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute left-3 top-7 ">
        <Image src="/images/logo-bookmark.svg" className="bg-white rounded p-2" alt='Logo' width={130} height={130}></Image>
        </div>
        <button className="absolute right-7 top-7 " onClick={onClose}>
          <FontAwesomeIcon className="text-3xl" icon={faXmark} />
        </button>
    
        <ul className="flex flex-col justify-center items-center space-y-16">
          <li className="text-2xl hover:text-blue-100 hover:font-medium border-b border-gray-600 pb-2 last:border-b-0">
            <Link href="/" className={styles.family} >Home</Link>
          </li>
          
        <li className="text-2xl hover:text-blue-100 hover:font-medium border-b border-gray-600 pb-2 last:border-b-0">
        <Link className={styles.family}  href="/">PRICING</Link>
        </li>
      <li className=" text-2xl hover:text-blue-100 hover:font-medium border-b border-gray-600 pb-2 last:border-b-0">
        <Link className={styles.family}  href="/">CONTACT</Link>
      </li>
      <li className=" text-2xl hover:text-blue-100 hover:font-medium">
        <Link  href="/" className= {`${styles.family} ${styles.drawerbutton} py-2 px-28 text-white rounded `}>LOGIN </Link>
      </li>
        </ul>
        <div className=" flex justify-center items-center absolute left-36 bottom-10 ">
        <Image src="/images/icon-facebook.svg" className='mr-10'  alt='Logo' width={25} height={25}></Image>
        <Image src="/images/icon-twitter.svg"  alt='Logo' width={25} height={25}></Image>
        </div>
      </div>
    );
  }

export default MobileDrawer;