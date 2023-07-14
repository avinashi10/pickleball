// LIBRARY IMPORTS
import React from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';


const Dropdown = ()=>{
  return (
    <Menu>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30">
        <Bars3Icon/>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
        {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Pickleball 101
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Oakland Open Play
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Private Lessons
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              About Darlene
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown;