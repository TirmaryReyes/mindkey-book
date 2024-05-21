import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  actionOnClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Button = ({
  actionOnClick,
  className,
  type = 'button',
  children,
  ariaLabel,
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={actionOnClick}
      type={type}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
