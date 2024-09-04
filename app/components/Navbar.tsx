"use client";
import { useAuth } from "../hooks/useAuth"; // Ensure this path is correct
import { signOut } from "firebase/auth"; // Import the signOut method from Firebase
import { useRouter } from "next/navigation"; // Use next/navigation in the app directory
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../firebase"; // Ensure this path is correct

const Navbar = () => {
  const { user } = useAuth(); // Destructuring the returned object
  const router = useRouter(); // To redirect the user after logout
  const [isClient, setIsClient] = useState(false); // State to track if we're on the client side

  // Ensure we're in the client
  useEffect(() => {
    setIsClient(true); // This runs only on the client side
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      router.push("/"); // Redirect to the home page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Render only on the client
  return (
    <nav className="bg-white text-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="My Logo" width={150} height={50} />
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          {isClient && user ? (
            <>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-400 bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-gray-400 bg-indigo-500 text-white px-5 py-3 rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
