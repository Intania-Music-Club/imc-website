import LgLogo from '#/icons/lg-logo.svg';
import ImcRoom from '#/images/imc-room.png';
import Image from 'next/image';

const Info = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <Image src={LgLogo} alt='IMC logo' className='mt-2 w-44' />
      <h1 className='text-4xl font-bold text-white'>ห้องซ้อมดนตรี</h1>

      <p className='text-center text-sm text-white'>
        ยินดีต้อนรับสู่ห้องซ้อมดนตรีชมรม Intania Music Club (IMC)
        ที่นี่คือสถานที่ที่คุณสามารถแชร์ความรักและความสนใจ
        ในดนตรีได้กับผู้คนที่มีความชอบเหมือนกัน
        ในห้องคลับนี้เราเชื่อว่าเสียงดนตรีมีความเป็นเสียง
        ที่เชื่อมโยงใจคนทั่วโลก ทั้งคนรักเพลง, นักดนตรี,
        และผู้สนใจดนตรีทุกคนที่มาร่วมเป็นส่วนหนึ่งในชุมชนของเรา
      </p>

      <Image src={ImcRoom} alt='IMC room' className='pt-3' />
    </div>
  );
};

export default Info;
