import Link from 'next/link';
import styles from '../styles/style.module.css'

function DesktopNavLinks() {
  return (
    <ul className="absolute right-0 flex flex-row space-x-6">
      <li className="  hover:text-blue-900 hover:font-medium">
        <Link className={styles.font} href="/">FEATURES</Link>
      </li>
      <li className=" hover:text-blue-900 hover:font-medium">
        <Link className={styles.font}  href="/">PRICING</Link>
      </li>
      <li className=" hover:text-blue-900 hover:font-medium">
        <Link className={styles.font}  href="/">CONTACT</Link>
      </li>
      <li className=" hover:text-blue-900 hover:font-medium">
        <Link  href="/" className= {`${styles.font} ${styles.button} py-1 px-6 text-white rounded `}>LOGIN </Link>
      </li>
    </ul>
  );
}
export default DesktopNavLinks;