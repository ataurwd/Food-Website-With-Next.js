import Link from 'next/link';
import LoginBtn from './LoginBtn';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          MyApp
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/meals" className="text-white hover:text-gray-200">
              Meals
            </Link>
          </li>
          <LoginBtn/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;