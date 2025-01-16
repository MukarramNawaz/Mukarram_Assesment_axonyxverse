import clsx from 'clsx';

const menuItems = ['General', 'Password', 'Price', 'Treatments'];

export default function SettingsSidebar({ activeItem, onItemClick }) {
  return (
    <div className="w-64 bg-[#F3F6FF] rounded-lg p-2 h-full">
      {menuItems.map((item) => (
        <button
          key={item}
          className={clsx(
            'w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors',
            activeItem === item
              ? 'bg-[white] text-primary font-semibold'
              : 'text-[#71788E] hover:bg-gray-50'
          )}
          onClick={() => onItemClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}