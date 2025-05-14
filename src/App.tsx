import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { ThemeSwitch } from './components/theme-switch'
import { NavBars } from './components/navbars'

export default function App() {

  return (
    <>
    <NavBars/>
  <h1 className="text-3xl font-bold underline text-center bg-red-800"> <FontAwesomeIcon icon={faHouse} className='text-indigo-600 text-4xl '/>
   <span className='ps-3'>Hello world!</span>
  </h1>
  <div className="bg-white dark:bg-gray-800 rounded-lg px-6 mt-4 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg className="h-6 w-6 stroke-white" />
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <ThemeSwitch className="fixed top-4 right-4" />

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to Dark Mode
        </h1>

        <div className="grid gap-6">
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              This is a card
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              This content automatically adjusts based on the current theme.
            </p>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
            Action Button
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

