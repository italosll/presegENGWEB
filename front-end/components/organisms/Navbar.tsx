import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { UserInterfaceContext } from '../../contexts/UserInterfaceContext';
import LogoPreseg from '../atoms/LogoPreseg';
import Menu from '../molecules/Menu';

export default function NavBar() {
  const { openDrawer, isDrawerOpen } = useContext(UserInterfaceContext);
  return (
    <>
      <Transition
        show={!isDrawerOpen}
        enter="transition-opacity duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full h-16 bg-white fixed border-b-2 border-blue-50">
          <div className=" h-full flex row items-center">
            <HiOutlineMenu
              size={40}
              className="flex text-gray-300 absolute left-4 lg:hidden"
              onClick={openDrawer}
            />
            <div className="mx-auto lg:m-0 lg:absolute lg:left-8 ">
              <LogoPreseg />
            </div>
            <div className="hidden lg:flex lg:mx-auto">
              <Menu />
            </div>
          </div>
        </div>
      </Transition>

      {/* <div className="flex fixed z-10 w-screen h-screen lg:hidden"> */}
    </>
  );
}
