import { FC } from 'react';

interface ShoppingIconProps {
  className?: string;
  size?: number;
}

const ShoppingIcon: FC<ShoppingIconProps> = ({ className, size = 20 }) => {
  const svgSize = `${size}px`;
  return (
    <svg
      className={className}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_126_75)">
        <path
          d="M0.159546 1.05629C0.159546 0.710944 0.437384 0.433105 0.782735 0.433105H1.9642C2.53545 0.433105 3.04179 0.765473 3.27809 1.26402H13.9502C14.6331 1.26402 15.1317 1.91318 14.9525 2.57272L13.8879 6.52737C13.6672 7.34271 12.9271 7.91137 12.0832 7.91137H4.59198L4.73219 8.65141C4.78932 8.94483 5.04639 9.15775 5.345 9.15775H12.8311C13.1764 9.15775 13.4542 9.43559 13.4542 9.78094C13.4542 10.1263 13.1764 10.4041 12.8311 10.4041H5.345C4.44657 10.4041 3.67537 9.76536 3.50919 8.88511L2.16933 1.84826C2.15115 1.74959 2.06547 1.67948 1.9642 1.67948H0.782735C0.437384 1.67948 0.159546 1.40164 0.159546 1.05629ZM3.48322 12.4814C3.48322 12.3177 3.51546 12.1557 3.57809 12.0045C3.64073 11.8532 3.73254 11.7158 3.84828 11.6001C3.96401 11.4844 4.10141 11.3926 4.25263 11.3299C4.40385 11.2673 4.56592 11.235 4.7296 11.235C4.89327 11.235 5.05535 11.2673 5.20657 11.3299C5.35778 11.3926 5.49518 11.4844 5.61092 11.6001C5.72666 11.7158 5.81846 11.8532 5.8811 12.0045C5.94374 12.1557 5.97598 12.3177 5.97598 12.4814C5.97598 12.6451 5.94374 12.8072 5.8811 12.9584C5.81846 13.1096 5.72666 13.247 5.61092 13.3627C5.49518 13.4785 5.35778 13.5703 5.20657 13.6329C5.05535 13.6956 4.89327 13.7278 4.7296 13.7278C4.56592 13.7278 4.40385 13.6956 4.25263 13.6329C4.10141 13.5703 3.96401 13.4785 3.84828 13.3627C3.73254 13.247 3.64073 13.1096 3.57809 12.9584C3.51546 12.8072 3.48322 12.6451 3.48322 12.4814ZM12.2079 11.235C12.5384 11.235 12.8554 11.3664 13.0892 11.6001C13.3229 11.8338 13.4542 12.1509 13.4542 12.4814C13.4542 12.812 13.3229 13.129 13.0892 13.3627C12.8554 13.5965 12.5384 13.7278 12.2079 13.7278C11.8773 13.7278 11.5603 13.5965 11.3265 13.3627C11.0928 13.129 10.9615 12.812 10.9615 12.4814C10.9615 12.1509 11.0928 11.8338 11.3265 11.6001C11.5603 11.3664 11.8773 11.235 12.2079 11.235Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_75">
          <rect
            width="14.9565"
            height="13.2947"
            fill="white"
            transform="translate(0.159546 0.433105)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { ShoppingIcon };
