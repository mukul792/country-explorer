import { useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs'; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    window.document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-10 bg-clr-white text-clr-dark-blue-800 dark:bg-clr-dark-blue-400 dark:text-clr-white">
      <div className="py-5 flex justify-between w-[85%] max-w-[1200px] mx-auto">
        <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
        <button
          aria-label="Toggle dark mode"
          className="flex items-center gap-2"
          onClick={handleToggle}
        >
          {/* Switch the icon based on darkMode state */}
          {darkMode ? (
            <BsSunFill className="text-xl" /> // Sun icon when in dark mode
          ) : (
            <BsMoonFill className="text-xl" /> // Moon icon when in light mode
          )}
          {/* Change the text based on darkMode state */}
          <p className="font-semibold">{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
