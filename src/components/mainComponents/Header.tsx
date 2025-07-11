import { Badge } from '@mui/material';
import { Icon } from '../Icon';

const Header = () => {
  return (
    <header className='bg-white shadow px-6 py-4 flex justify-between items-center'>
      <div className='text-xl font-bold'></div>
      <div className='flex items-center space-x-4'>
        <button className='rounded-full bg-[#FFCC00] p-1 flex justify-center items-center'>
          <Icon name='help' className='' />
          <p className='ml-2'>Help</p>
        </button>
        <button>
          <Badge
            color='error'
            variant='dot'
            invisible={false}
            overlap='circular'
          >
            <Icon name='notification' className='' />
          </Badge>
        </button>
        <span className='text-sm'>Hello, John Doe</span>

        <img
          src='https://i.pravatar.cc/32'
          alt='Profile'
          className='rounded-full w-8 h-8'
        />
      </div>
    </header>
  );
};

export default Header;
