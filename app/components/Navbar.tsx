"use client"
// app/components/Navbar.tsx
import { useAuth } from '../hooks/useAuth'; // Ensure this path is correct
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { user } = useAuth(); // Destructuring the returned object

  return (
    <nav className="bg-white text-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="My Logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          {user ? (
            <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          ) : (
            <Link href="/login" className="hover:text-gray-400">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
