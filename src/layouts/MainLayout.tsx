import { Outlet } from 'react-router-dom';
import SideBar from '../components/mainComponents/SideBar';
import Header from '../components/mainComponents/Header';

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-1 overflow-hidden'>
        <SideBar />
        <main className='flex-1 overflow-y-auto p-4'>
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
