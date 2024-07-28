import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div className="max-w-7xl lg:max-w-6xl mx-auto px-2 py-4 ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
