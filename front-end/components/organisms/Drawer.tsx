import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import { UserInterfaceContext } from '../../contexts/UserInterfaceContext';
import Menu from '../molecules/Menu';

export default function Drawer() {
  const { isDrawerOpen, closeDrawer } = useContext(UserInterfaceContext);
  return (
    <>
      {isDrawerOpen && (
        <div
          onClick={closeDrawer}
          className="absolute z-0 w-full h-screen   opacity-60"
        />
      )}

      <Transition show={isDrawerOpen}>
        <Transition.Child
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute z-40  w-64 h-screen pt-10 bg-gray-100">
            <Menu />
          </div>
        </Transition.Child>

        {/* <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div
            onClick={closeDrawer}
            className="fixed w-full h-screen  bg-gray-600 opacity-60"
          />
        </Transition.Child> */}

        {/* <div className="flex fixed z-10 w-screen h-screen lg:hidden"> */}
      </Transition>

      {/* </div> */}

      {/* )} */}
    </>
  );
}
