import Navbar from '@/components/Navbar';

interface TProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: TProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
