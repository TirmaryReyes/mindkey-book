import React from 'react';

interface MenuBurgerClosedProps {
  size?: number;
}

const MenuBurgerClosed: React.FC<MenuBurgerClosedProps> = ({ size = 44 }) => {
  const svgSize = `${size}px`;
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 44 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.74427 2.29123C3.1875 1.83967 4.84323 2.351 5.44531 3.43342L17 24.2252L28.5547 3.43342C29.1568 2.351 30.8125 1.83967 32.2557 2.29123C33.699 2.74279 34.3807 3.98459 33.7786 5.06701L19.612 30.567C19.1693 31.3572 18.1422 31.8752 17 31.8752C15.8578 31.8752 14.8219 31.3572 14.388 30.567L0.221355 5.06701C-0.380728 3.98459 0.301043 2.74279 1.74427 2.29123Z"
        fill="#15EFF5"
      />
    </svg>
  );
};

export default MenuBurgerClosed;
