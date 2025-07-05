
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBars() {
   const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const linkBaseClasses = "text-[17px] transition-colors";
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBaseClasses} text-[#6EC1F6] font-bold dark:text-[#28A8EA] underline underline-offset-4 decoration-3`
      : `${linkBaseClasses} text-white dark:text-[#dce8fa] hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]`;
  return (
    <>
    <header className="w-full">
      <div className="bg-green-300 dark:bg-[#1a2150] h-[42px] sm:h-[64px] border-b border-gray-100 dark:border-[#22295a] flex items-center">
        <div className="max-w-[1380px] w-full mx-auto flex justify-between items-center px-2 sm:px-8">
          <img src="/src/assets/favicon.png" className="h-[2.5rem] sm:h-[4rem]" alt="Logo" />

          <div className="flex items-center gap-1 sm:gap-2">
            <FontAwesomeIcon icon={faPhoneVolume} className="text-lg sm:text-2xl text-[#23295A] dark:text-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] sm:text-xs font-semibold text-[#23295A] dark:text-white">EMERGENCY</span>
              <span className="text-[10px] sm:text-xs text-[#28A8EA] dark:text-[#66cfff]">(+257) 61377295</span>
            </div>
          </div>

            <div className="flex items-center gap-1 sm:gap-2">
            <FontAwesomeIcon icon={faClock} className="text-[#23295A] dark:text-white text-lg sm:text-2xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] sm:text-xs font-semibold text-[#23295A] dark:text-white">WORK HOUR</span>
              <span className="text-[10px] sm:text-xs text-[#28A8EA] dark:text-[#66cfff] font-medium">08:00 - 20:00 Everyday</span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#23295A] dark:text-white text-lg sm:text-2xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] sm:text-xs font-semibold text-[#23295A] dark:text-white">LOCATION</span>
              <span className="text-[10px] sm:text-xs text-[#28A8EA] dark:text-[#66cfff] font-medium">Boulevard Melchior Ndadaye</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#232E6A] dark:bg-[#10162e] border-b-2 border-[#6ec1f6] dark:border-[#1bb7fa]">
        <div className="max-w-[1380px] mx-auto w-full px-6 py-3 flex justify-between items-center">

          <ul className="hidden md:flex gap-6">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink to={path} className={getLinkClass}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white dark:text-[#dce8fa]"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
                  <div className="flex items-center gap-2">
          <button className="p-2">
            <svg className="w-6 h-6 text-white dark:text-[#dce8fa]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-[#b7cef7] dark:bg-[#20306b] text-[#232E6A] dark:text-[#c3e7fa] font-semibold hover:bg-[#6ec1f6] dark:hover:bg-[#28A8EA] transition"
          >
            Appointment
          </a>
        </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col gap-4">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink to={path} className={getLinkClass}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
