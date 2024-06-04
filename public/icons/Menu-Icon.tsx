import { FC } from 'react';

interface MenuIconProps {
  className?: string;
  size?: number;
}

const MenuIcon: FC<MenuIconProps> = ({ className, size = 44 }) => {
  const svgSize = `${size}px`;
  return (
    <svg
      className={className}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 44 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.42862C0 7.69023 1.40446 6.28577 3.14286 6.28577H40.8571C42.5955 6.28577 44 7.69023 44 9.42862C44 11.167 42.5955 12.5715 40.8571 12.5715H3.14286C1.40446 12.5715 0 11.167 0 9.42862ZM0 25.1429C0 23.4045 1.40446 22.0001 3.14286 22.0001H40.8571C42.5955 22.0001 44 23.4045 44 25.1429C44 26.8813 42.5955 28.2858 40.8571 28.2858H3.14286C1.40446 28.2858 0 26.8813 0 25.1429ZM44 40.8572C44 42.5956 42.5955 44 40.8571 44H3.14286C1.40446 44 0 42.5956 0 40.8572C0 39.1188 1.40446 37.7143 3.14286 37.7143H40.8571C42.5955 37.7143 44 39.1188 44 40.8572Z"
        fill="#17A8B4"
      />
    </svg>
  );
};

export { MenuIcon };
