import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <Navbar 
      className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      fluid
      rounded
    >
      {/* Logo - Enhanced with better gradient */}
      <NavbarBrand as={Link} to="/" className="group">
        <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-lg text-white text-sm sm:text-base font-bold tracking-wide transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          BaazTechno
        </span>
        <span className="ml-3 text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Blogs
        </span>
      </NavbarBrand>

      {/* Search Bar */}
      <div className="flex items-center gap-4 md:order-2">
        <form className="hidden lg:block">
          <TextInput
            type="text"
            placeholder="Search articles..."
            rightIcon={AiOutlineSearch}
            className="w-64"
            shadow
          />
        </form>

        {/* Mobile Search Button */}
        <Button 
          className="lg:hidden" 
          color="gray" 
          pill
          size="sm"
          aria-label="Search"
        >
          <AiOutlineSearch className="w-4 h-4" />
        </Button>

        {/* Theme Toggle */}
        <Button 
          color="gray" 
          pill
          size="sm"
          className="hidden sm:inline-flex"
          aria-label="Toggle theme"
        >
          <FaMoon className="w-4 h-4" />
        </Button>

        {/* Sign In Button */}
        <Link to="/sign-in" className="hidden sm:block">
          <Button 
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Sign In
          </Button>
        </Link>

        <NavbarToggle className="ml-2" />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse>
        <NavbarLink 
          as={Link} 
          to="/" 
          active={location.pathname === '/'}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white text-lg font-medium"
        >
          Home
        </NavbarLink>
        <NavbarLink 
          as={Link} 
          to="/about" 
          active={location.pathname === '/about'}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white text-lg font-medium"
        >
          About
        </NavbarLink>
        <NavbarLink 
          as={Link} 
          to="/projects" 
          active={location.pathname === '/projects'}
          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white text-lg font-medium"
        >
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;