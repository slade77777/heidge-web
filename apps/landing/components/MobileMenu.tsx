import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Menu, Close } from "shared/icons";
import { Channels, NavLinks } from "./Header";

const MobileMenu = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button
        className="flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-7 h-7 text-white" />
      </button>
      <Transition show={open}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hdgGradient w-screen fixed h-screen left-0 top-0 z-10">
            <div className="grid grid-rows-[auto,1fr,1fr] h-full">
              <div className="text-right pt-3 pr-3">
                <button className="" onClick={() => setOpen(false)}>
                  <Close className="w-8 h-8 text-white" />
                </button>
              </div>
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-y-2"
                enterTo="translate-y-0 opacity-100"
                className="place-self-end justify-self-center"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-0 opacity-0 -translate-y-2"
              >
                <NavLinks
                  className="mt-8 text-white flex flex-col space-y-10 text-2xl md:text-3xl"
                  onClick={() => setOpen(false)}
                />
              </Transition.Child>
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-y-2"
                enterTo="opacity-100"
                className="justify-self-center place-self-end"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 translate-y-2"
              >
                <Channels
                  className="flex space-x-5 items-center justify-center pb-36"
                  iconClass="w-8 h-8 text-white flex"
                />
              </Transition.Child>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};

export default MobileMenu;
