import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";
import { Navigation } from "../components/navigation";

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function NavItem({
  item,
  close,
}: {
  item: { name: string; path: string };
  close?: () => void;
}) {
  return (
    <NavLink
      to={item.path}
      onClick={close}
      className={({ isActive }) =>
        classNames(
          isActive
            ? "bg-blue-700 text-white underline underline-offset-4"
            : "hover:text-white hover:bg-blue-700 hover:underline underline-offset-4",
          "block px-4 py-2 rounded-md font-medium transition-all"
        )
      }
    >
      {item.name}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" rounded-md">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between h-16 px-4">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-2">
              {Navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <DisclosurePanel className="sm:hidden  transition-all duration-300 ease-in-out">
            {({ close }) => (
              <div className="space-y-1 px-2 pt-2 pb-3">
                {Navigation.map((item) => (
                  <NavItem key={item.name} item={item} close={close} />
                ))}
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
