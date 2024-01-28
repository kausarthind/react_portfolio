import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo/>
          <div className="space-x-4 text-gray">
            <Link to="/about" className="text-white">About</Link>
            <Link to="/projects" className="text-white">Projects</Link>
            <Link to="/services" className="text-ßwhite">Services</Link>
            <Link to="/contact" className="ßtext-white">Contact</Link>
          </div>ß
        </div>
      </nav>
    );
  };

export default Navbar;
