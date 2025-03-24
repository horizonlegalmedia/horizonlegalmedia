import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react'; // Import icons from react-lucide
import { navItems } from '../../data/dummy';
import logo from '../../data/images/others/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  return (
    <nav className="bg-[#081a28] text-white h-20 pt-2 lg:h-20 lg:pt-4 text-md font-extrabold fixed w-full z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center lg:mb-4">
            <Link to="/">
              <img
                className="h-12 w-12 lg:w-16 lg:h-16  bg-white rounded-full"
                src={logo}
                alt="Company Logo"
              />
            </Link>
            <span className='text-xs tracking-tighter font-bold md:font-bold mx-0.5 md:text-xl md:mx-2'>Horizon Legal Media Group</span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `px-3 py-2 font-medium transition-colors ${isActive ? 'text-blue-600' : 'hover:text-gray-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Login/Signup or User Profile - Desktop */}
          {/* <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              // User Profile Icon
              <button className="p-2 rounded-full hover:bg-slate-600">
                <User size={24} />
              </button>
            ) : (
              // Login and Signup Buttons
              <>
                <Link
                  to="/"
                  className='px-3 py-2 font-medium hover:bg-slate-600 rounded-md'
                >
                  Login
                </Link>
                <Link
                  to="/"
                  className='px-3 py-2 font-medium hover:bg-slate-600 rounded-md'
                >
                  Signup
                </Link>
              </>
            )}
          </div> */}

          <div className='flex md:hidden'>
            {/* Mobile Menu Login Button or Mobile Menu Profile*/}
            {/* <div className="md:hidden flex items-center">
              {
                isLoggedIn ? (
                  // User Profile Icon
                  <button className="p-2 rounded-full hover:bg-slate-600">
                    <User size={24} />
                  </button>
                )
                  : (
                    <Link to='/' className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-600 focus:outline-none">
                      Login
                    </Link>
                  )
              }
            </div> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Use react-lucide icons */}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gradient-to-br from-gray-900 to-blue-900 text-white' : 'text-gray-700 hover:bg-gray-200'
                  }`
                }
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;