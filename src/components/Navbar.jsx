import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

    return (
      <nav className="p-4 shadow-md w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Logo/>
          <div className="hidden md:flex space-x-4 text-gray">
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/services" className="nav-item">Services</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </div>
          <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white text-xl cursor-pointer"onClick={toggleSideNav} />
        </div>
        </div>

        {isSideNavVisible && (
        <div className={`md:hidden p-4 transition duration-300 ease-in-out ${
          isSideNavVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
        } text-gray`}>
          <Link to="/about" className="nav-item block mb-2">About</Link>
          <Link to="/projects" className="nav-item block mb-2">Projects</Link>
          <Link to="/services" className="nav-item block mb-2">Services</Link>
          <Link to="/contact" className="nav-item block">Contact</Link>
        </div>
      )}
      </nav>
    );
  };

export default Navbar;
