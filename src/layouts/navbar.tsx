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

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-red-800">
      {({ open }) => (
        <>
          <div className="container">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex  items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {Navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-blue-900 text-white"
                                : "text-white hover:bg-blue-700",
                              "px-[20px] py-[10px] font-medium"
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-12 sm:hidden">
                  <div className="sm:hidden flex items-center">
                    <DisclosureButton className="inline-flex items-center justify-center p-2 m-1 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              {({ close }) => (
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {Navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => close()} // ✅ Auto-close on click
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-blue-900 text-white"
                            : "text-white hover:bg-blue-700",
                          "block px-3 py-2 font-medium"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
