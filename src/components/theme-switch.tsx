import { useState, useEffect } from 'react'

interface ThemeSwitchProps {
  className?: string;
}

export function ThemeSwitch({ className = '' }: ThemeSwitchProps) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${className}`}
    >
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}