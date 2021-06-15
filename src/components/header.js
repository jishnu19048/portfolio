import React, { Component } from 'react';
import '../styles/main.css';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import {Link} from 'react-scroll'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
      <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
              <div className="flex justify-start  lg:flex">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 justify-start md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex items-center space-x-10">
                <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
                </a>
                <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="experience" spy={true} smooth={true}>Experience</Link>
                </a>
                <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="projects" spy={true} smooth={true}>Projects</Link>
                </a>
                <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="contact" spy={true} smooth={true}>Contact</Link>
                </a>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                    <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
                  </a>
                  <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link to="experience" spy={true} smooth={true}>Experience</Link>
                  </a>
                  <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link to="projects" spy={true} smooth={true}>Projects</Link>
                  </a>
                  <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link to="contact" spy={true} smooth={true}>Contact</Link>
                  </a>
                    </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
      </header>
      </React.Fragment>
    );
  }
}