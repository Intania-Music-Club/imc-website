const Rule = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <h1 className='mt-6 text-3xl font-bold text-white'>กฎการใช้ห้องซ้อม</h1>
      <ol className='list-decimal px-7 text-sm text-white'>
        <li>
          สามารถจองได้เฉพาะวงที่ผ่านเข้ารอบ Online Audition
          รายการเเข่งวงเท่านั้น ✨วงไหนสมัครมา ติดหมดทุกวง✨
        </li>
        <li>
          😡ถ้าหาก slot การจองไหนที่ไม่มีใส่เบอร์โทรติดต่อเอาไว้
          จะไม่นับว่าเป็นการจอง😡
        </li>
        <li>
          หากจองแล้ว ❗️ห้าม❗️ ยกเลิกการจองทุกกรณี ฉะนั้นคิดดีๆมาให้ตรงเวลา
        </li>
      </ol>
    </div>
  );
};

export default Rule;
