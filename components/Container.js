import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import { motion } from "framer-motion"

import Footer from '@/components/Footer';

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <nav className="flex justify-between items-center max-w-4xl w-full my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 px-8 py-2">
        <motion.div initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="bg-gradient-to-r from-indigo-300 to-blue-500  p-2 rounded-md"
        >
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-white dark:text-gray-100 font-bold">هومن امینی</a>
          </NextLink>
        </motion.div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
            </svg>
          )}
        </button>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black">
        {children}
        <Footer />
      </main>
    </div>
  );
}
