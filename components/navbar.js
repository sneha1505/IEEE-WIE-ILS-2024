import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [

    "About",
    "ForAttendees",
    "Events",
    "Tracks",
    "Registrations",
    "Sponsors",
    "Team",
  ];

  return (
      <div className="">
        <div className="lg:flex hidden w-full py-2 border-b-2 border-[#845997]  bg-[#ffe7fd]  ">
            <links className="px-12 flex text-[#845997] text-[14px]  font-bold ">
                <a href="https://www.ieee.org/" className="px-1">IEEE.org </a>
                <div className="font-normal">|</div>
                <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="px-1">IEEE <i>Xplore</i> Digital
                    Library </a>
                <div className="font-normal">|</div>
                <a href="https://standards.ieee.org/" className="px-1">IEEE Standards </a>
                <div className="font-normal">|</div>
                <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6" className="px-1">IEEE
                    Spectrum </a>
                <div className="font-normal">|</div>
                <a href="http://wie.ieee.org" className="px-1">IEEE WIE </a>
                <div className="font-normal">|</div>
                <a href="#" className="px-1">More Sites </a>
            </links>
        </div>
          <div className="w-full bg-white bg-[url('/header-bg.png')] bg-contain">

          <nav
              className="container relative flex flex-wrap items-center justify-between px-8 py-4 mx-auto lg:justify-between xl:px-0">
            {/* Logo  */}
            <Disclosure>
              {({open}) => (
                  <>
                    <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                      <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-[#452c63] ">

                    <span className="flex lg:space-x-10 space-x-5 ">
                       <Image
                           src="/WIE_purple_pms526.png"
                           alt="N"
                           width="256"
                           height="256"
                           className="lg:w-24 w-16"
                       />

                        <Image
                           src="/ieee-event.webp"
                           alt="N"
                           width="512"
                           height="256"
                           className="lg:w-48 w-32"
                       />

                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#452c63] focus:text-[#452c63] focus:bg-indigo-100 focus:outline-none ">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                      <Link  href="/" className="w-full  px-2 py-2 -ml-4 text-gray-500 rounded-md  hover:text-[#452c63] focus:text-[#452c63] focus:bg-indigo-100  focus:outline-none">
                          HOME
                      </Link>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item} className="w-full px-2 py-2 -ml-4 text-gray-500 rounded-md  hover:text-[#452c63] focus:text-[#452c63] focus:bg-indigo-100  focus:outline-none">
                          {item}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-[#cc00cc] rounded-md lg:ml-5">
                        Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <Link href="/" className="font-bold inline-block px-4 hover:underline py-2 text-lg  text-gray-800 no-underline rounded-md  hover:text-[#452c63] focus:text-[#452c63] focus:bg-indigo-100 focus:outline-none ">
                  Home
              </Link>
            {navigation.map((menu, index) => (
              <li className=" mr-3 nav__item" key={index}>

                <Link href={menu} className="font-bold inline-block px-4 py-2 text-lg  text-gray-800 no-underline rounded-md  hover:underline focus:text-[#452c63] focus:bg-indigo-100 focus:outline-none ">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/" className="px-6 py-2 text-white bg-[#cc00cc] rounded-md md:ml-5">
              Join Now
          </Link>

        </div>
      </nav>
    </div>
      </div>
  );
}

export default Navbar;
