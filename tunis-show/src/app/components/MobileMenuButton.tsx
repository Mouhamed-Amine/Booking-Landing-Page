import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppProps } from 'next/app';

interface MobileMenuButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
    return (
     
      <button className="absolute right-2 top-1 p-1" onClick={onClick}>
        <FontAwesomeIcon className="text-2xl" icon={faBars} />
      </button>
    );
  };
  
export default MobileMenuButton;