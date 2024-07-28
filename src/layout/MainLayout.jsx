import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div className="max-w-full lg:max-w-6xl mx-auto p-4 ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
