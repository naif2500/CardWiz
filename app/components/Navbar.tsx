import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg" // Path to your SVG file
            alt="My Logo"
            width={150} // Set the width
            height={50} // Set the height
          />
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
