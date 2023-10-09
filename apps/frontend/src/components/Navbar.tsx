import Logo from '#/icons/logo.svg';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='py- fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-black px-4 md:px-5 lg:h-20 lg:px-10 lg:py-4'>
      <div className='flex h-full items-center gap-2 py-3'>
        <div className='relative aspect-square h-full'>
          <Image src={Logo} alt='icon' fill className='object-contain' />
        </div>
        <div className='flex flex-col text-white'>
          <h1 className='text-2xl font-extrabold leading-none'>IMC</h1>
          <h2 className='text-xs font-extrabold leading-none'>
            Intania music club
          </h2>
        </div>
      </div>
      <button className='text-white'>
        <Icon icon='cil:hamburger-menu' className='text-3xl' />
      </button>
    </nav>
  );
};

export default Navbar;
