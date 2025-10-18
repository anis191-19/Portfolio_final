import { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition z-50"
    >
      {theme === "light" ? <MoonIcon className="w-6 h-6 text-gray-800" /> : <SunIcon className="w-6 h-6 text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
