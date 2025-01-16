import { RiDashboardLine, RiMailLine, RiCalendarLine, RiStarLine, RiSettings4Line, RiLogoutBoxLine } from 'react-icons/ri';
import Logo from '../assets/Logo.png';
const navItems = [
  { icon: RiDashboardLine, label: 'DASHBOARD', count: 0 },
  { icon: RiMailLine, label: 'INBOX', count: 2 },
  { icon: RiCalendarLine, label: 'SCHEDULE', count: 0 },
  { icon: RiStarLine, label: 'REVIEWS', count: 6 },
  { icon: RiSettings4Line, label: 'SETTINGS', count: 0 },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-24 bg-[#F9F9FB] flex flex-col items-center py-6 ">
      
      
      <nav className="flex-1 flex flex-col gap-6 ">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <div className={`w-20 h-16 flex flex-col items-center rounded-xl justify-center cursor-pointer hover:text-primary ${item.label === 'SETTINGS' ? 'text-primary bg-white' : 'text-gray-500'}`}>
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
              {item.count > 0 && (
                <span className="absolute top-2 right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {item.count}
                </span>
              )}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto cursor-pointer text-gray-500 hover:text-primary">
        <div className="w-20 h-16 flex flex-col items-center justify-center">
          <RiLogoutBoxLine className="w-6 h-6" />
          <span className="text-xs mt-1">Logout</span>
        </div>
      </div>
    </div>
  );
}