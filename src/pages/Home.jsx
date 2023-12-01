import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Landmain from '../components/Landing/landing';
import Product from '../components/products/products'
import Footer from '../components/footer/footer';
const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
 
 
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <p  
                          className={classNames('block px-4 py-2 text-sm text-gray-700')}
                          >
                        {auth.currentUser.displayName}
                          </p>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/" onClick={handleLogout} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <Landmain />
            <Product/>
            <Footer/>
    </div>
  )
}

export default Home