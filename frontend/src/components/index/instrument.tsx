import Bass from '#/icons/bass.svg';
import Drum from '#/icons/drum.svg';
import Guitar from '#/icons/guitar.svg';
import Piano from '#/icons/piano.svg';
import Vocal from '#/icons/vocal.svg';
import Image from 'next/image';

const Instrument = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <h1 className='mt-5 text-3xl font-bold text-white'>เครื่องดนตรี</h1>

      <div className='flex w-full flex-wrap justify-evenly gap-y-4'>
        <div className='flex w-5/12 flex-col items-center rounded-lg border border-white/30 bg-darkgray p-5'>
          <Image src={Vocal} alt='vocal' />
          <p className='mt-3 text-xl text-white'>ไมค์ขับร้อง</p>
        </div>
        <div className='flex w-5/12 flex-col items-center rounded-lg border border-white/30 bg-darkgray p-5'>
          <Image src={Guitar} alt='guitar' />
          <p className='mt-3 text-xl text-white'>กีต้าร์</p>
        </div>
        <div className='flex w-5/12 flex-col items-center rounded-lg border border-white/30 bg-darkgray p-5'>
          <Image src={Bass} alt='bass' />
          <p className='mt-3 text-xl text-white'>เบส</p>
        </div>
        <div className='flex w-5/12 flex-col items-center rounded-lg border border-white/30 bg-darkgray p-5'>
          <Image src={Drum} alt='drum' />
          <p className='mt-3 text-xl text-white'>กลอง</p>
        </div>
        <div className='flex w-5/12 flex-col items-center rounded-lg border border-white/30 bg-darkgray p-5'>
          <Image src={Piano} alt='keyboard' />
          <p className='mt-3 text-xl text-white'>คีย์บอร์ด</p>
        </div>
      </div>
    </div>
  );
};

export default Instrument;
