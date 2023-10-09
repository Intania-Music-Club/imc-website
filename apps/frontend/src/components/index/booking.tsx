import BookOpen from '#/icons/book-open.svg';
import Button from '@/components/Button';
import Image from 'next/image';

const Booking = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-5 text-3xl font-bold text-white'>ระบบจองห้องซ้อม</h1>

      <Image src={BookOpen} alt='Open book' className='mt-2 w-44' />

      <Button variant='primary' size='fit' className='mt-3'>
        จองห้องซ้อม
      </Button>
    </div>
  );
};

export default Booking;
