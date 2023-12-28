import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../../../app/assets/Images/Logo/CIT.jpg'

import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Team', href: '/team', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Sponsorship', href: '/sponsorship', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16  justify-between">
              {/*  TODO:fixing the responsiveness in the small devices  */}
              <div className="flex justify-between h-16 ">
                {/* Mobile menu button */}
                <div></div>
                <div className="ml-auto flex   items-center md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center bg-gray-100 rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* LOGO  */}
                <div className="flex flex-shrink-0 items-center justify-end">
                  <img className="h-8 w-auto" src={logo} alt="CIT logo" />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                {/*  Phone  */}
                <div className="hidden  space-x-10  lg:ml-4 lg:flex lg:flex-shrink-0 lg:items-center">
                  <div className=" ">
                    {/* Social icons    */}

                    <div className="  flex space-x-8">
                      <FaXTwitter className="text-white" />
                      <FaLinkedin className="text-white" />
                    </div>
                  </div>
                  <div className="flex  space-x-5 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span>
                      <BsFillPhoneVibrateFill className="text-3xl " />
                    </span>

                    <h1>
                      <span className="sr-only">Phone:</span>
                      <span className="text-white">+1 5589 55488 55</span>
                    </h1>
                  </div>
                  {/*  Email */}

                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <div className="flex  space-x-5 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span>
                        <FaEnvelope className="text-3xl " />
                      </span>
                      <h1>
                        <h1>
                          <span className="sr-only">Email:</span>
                          <span className="text-white">
                            example@example.com
                          </span>
                        </h1>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
