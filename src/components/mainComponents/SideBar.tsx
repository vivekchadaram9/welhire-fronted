import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Divider } from '@mui/material';
import { colors } from '../../styles/themes';
import { Icon } from '../Icon';
import welspunSmallLogo from '../../assets/images/welhireLogoSmall.png';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { name: 'Jobs', path: '/jobs', icon: 'jobs' },
  { name: 'Assessment', path: '/assessment', icon: 'assessment' },
  { name: 'Candidate', path: '/candidates', icon: 'candidate' },
  { name: 'Analytics / Reports', path: '/analytics', icon: 'analytics' },
  { name: 'Communications', path: '/communication', icon: 'communication' },
];

const bottomNavItems = [
  { name: 'Roles / Permission', path: '/roles', icon: 'roles' },
  { name: 'Integrations', path: '/integrations', icon: 'integrations' },
  { name: 'Setting', path: '/setting', icon: 'setting' },
  
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col transition-all duration-300 bg-white  h-full border-r-1 border-gray-200
        ${isOpen ? 'w-64' : 'w-25'} overflow-hidden`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        {isOpen ? (
          <Icon name='logo' className='w-40 h-25 mx-auto mt-4' />
        ) : (
          <img
            src={welspunSmallLogo}
            alt='Logo'
            className='w-35 h-25 mx-auto mt-4 bg-[#D9EBFF]'
          />
        )}
        <nav className='flex flex-col space-y-2 mt-4 mx-5 justify-between flex-1'>
          <div className='space-y-2'>
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#D9EBFF]  ${
                    isActive ? `bg-[#D9EBFF] font-semibold text-[#292F66]` : ''
                  }`
                }
              >
                <Icon
                  name={icon}
                  className={`w-5 h-5  ${
                    isActive(path)
                      ? `fill-[${colors.activeIconColor}]`
                      : `fill-[#000000]`
                  }`}
                />
                {isOpen && <p>{name}</p>}
              </NavLink>
            ))}
          </div>
          <div className='space-y-2'>
            <Divider />
            {bottomNavItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#D9EBFF]  ${
                    isActive ? `bg-[#D9EBFF] font-semibold text-[#292F66]` : ''
                  }`
                }
              >
                <Icon
                  name={icon}
                  className={`w-5 h-5  ${
                    isActive(path)
                      ? `fill-[${colors.activeIconColor}]`
                      : `fill-[#000000]`
                  }`}
                />
                {isOpen && <p>{name}</p>}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className='md:hidden'>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='p-2 m-2 rounded'
        >
          {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>

        {mobileOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-30 z-40'
            onClick={() => setMobileOpen(false)}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 z-50 bg-white text-[#292F66] transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex items-center justify-between px-4 py-4'>
            <span className='text-lg font-semibold'>Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <XIcon size={20} />
            </button>
          </div>
          <nav className='space-y-2 mt-4'>
            {navItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10 ${
                    isActive ? 'bg-[#D9EBFF] font-semibold' : ''
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                <XIcon size={20} />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
