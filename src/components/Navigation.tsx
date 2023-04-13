import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.pathname === "/";

  return (
    <div className="w-fit ml-auto pb-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-400 px-4 py-2 text-sm font-medium text-white hover:bg-slate-500 transition-all">
            Menu
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-white"
              aria-hidden="true"
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
            <div className="px-1 py-1 flex flex-col gap-1">
              {!home && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(`/`, { state: { key: "Temp" } })}
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Home
                    </button>
                  )}
                </Menu.Item>
              )}

              <Menu.Item>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 transition-all">
                        <span>TypeScript</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-2 text-sm text-gray-500">
                        <button
                          onClick={() =>
                            navigate(`/`, { state: { key: "Temp" } })
                          }
                          className={`bg-blue-50 hover:bg-blue-100 text-gray-900 flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                        >
                          Edit
                        </button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Menu.Item>

              <Menu.Item>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-violet-100 px-4 py-2 text-left text-sm font-medium text-violet-900 hover:bg-violet-200 transition-all">
                        <span>Framer Motion</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-violet-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-2 text-sm text-gray-500">
                        <button
                          onClick={() =>
                            navigate(`/multiselect`, { state: { key: "Temp" } })
                          }
                          className={`bg-violet-50 hover:bg-violet-100 text-gray-900 flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                        >
                          Multi Select
                        </button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate(`/`, { state: { key: "Temp" } })}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
