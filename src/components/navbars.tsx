
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavBars() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="w-full">
      <div className="bg-white dark:bg-[#1a2150] w-full h-[64px] flex items-center border-b border-gray-100 dark:border-[#22295a]">
        <div className="max-w-[1380px] w-full mx-auto flex items-center justify-between px-8">

          <div className="flex-shrink-0 select-none font-serif text-[2rem] leading-none">
            <img src="src/assets/favicon.png" className="h-[4rem] w-auto" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhoneVolume} className='text-2xl text-[#23295A] dark:text-white' />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#23295A] dark:text-white">EMERGENCY</span>
              <span className="text-xs text-[#28A8EA] dark:text-[#66cfff] font-medium"> (+257) 61377295</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className='text-[#23295A] dark:text-white text-2xl' />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#23295A] dark:text-white">WORK HOUR</span>
              <span className="text-xs text-[#28A8EA] dark:text-[#66cfff] font-medium">08:00 - 20:00 Everyday</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className='text-[#23295A] dark:text-white text-2xl' />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#23295A] dark:text-white">LOCATION</span>
              <span className="text-xs text-[#28A8EA] dark:text-[#66cfff] font-medium">Boulevard Melchior Ndadaye</span>
            </div>
          </div>
        </div>
      </div>
       {/* <nav className="bg-[#232E6A] dark:bg-[#10162e] h-[55px] w-full flex items-center border-b-2 border-[#6ec1f6] dark:border-[#1bb7fa]">
        <div className="max-w-[1380px] mx-auto w-full flex items-center justify-between px-8">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-semibold text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA] focus:outline-none focus:ring-0"
                style={{ fontWeight: 700 }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-normal text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]">About us</a>
            </li>
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-normal text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]">Services</a>
            </li>
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-normal text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]">Doctors</a>
            </li>
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-normal text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]">News</a>
            </li>
            <li>
              <a href="#" className="text-white dark:text-[#dce8fa] font-normal text-[17px] px-2 py-1 rounded transition-colors duration-150 bg-transparent hover:text-[#6EC1F6] dark:hover:text-[#28A8EA]">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="p-2">
              <svg className="w-6 h-6 text-white dark:text-[#dce8fa]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <a
              href="#"
              className="ml-2 px-7 py-2 rounded-full bg-[#b7cef7] dark:bg-[#20306b] text-[#232E6A] dark:text-[#c3e7fa] font-semibold text-[17px] shadow-none hover:bg-[#6ec1f6] dark:hover:bg-[#28A8EA] transition-colors duration-150"
              style={{ minWidth: 150, textAlign: "center" }}
            >
              Appointment
            </a>
          </div>
        </div>
      </nav> */}
      
          <nav className="bg-[#232E6A] dark:bg-[#10162e] border-b-2 border-[#6ec1f6] dark:border-[#1bb7fa]">
      <div className="max-w-[1380px] mx-auto w-full px-6 py-3 flex items-center justify-between">
        {/* Logo or Title */}
        <div className="text-white font-bold text-xl">MyClinic</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "About us", "Services", "Doctors", "News", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`text-white dark:text-[#dce8fa] text-[17px] font-normal hover:text-[#6EC1F6] dark:hover:text-[#28A8EA] transition-colors`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Action + Search (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white dark:text-[#dce8fa]"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {["Home", "About us", "Services", "Doctors", "News", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-white dark:text-[#dce8fa] text-[17px] hover:text-[#6EC1F6] dark:hover:text-[#28A8EA] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <button className="p-2 self-start">
              <svg className="w-6 h-6 text-white dark:text-[#dce8fa]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <a
              href="#"
              className="w-full text-center px-5 py-2 rounded-full bg-[#b7cef7] dark:bg-[#20306b] text-[#232E6A] dark:text-[#c3e7fa] font-semibold hover:bg-[#6ec1f6] dark:hover:bg-[#28A8EA] transition"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
    </header>
    </>
  );
}
