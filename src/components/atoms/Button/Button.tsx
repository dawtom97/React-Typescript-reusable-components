import { FC, MouseEvent, ReactNode } from 'react';
import { Container } from './Button/styles';

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'regular' | 'large';
  disabled?: boolean;
  ariaLabel?: string;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color = 'primary',
  size = 'regular',
  disabled,
  ariaLabel = 'Press the button',
}) => {
  return (
    <Container
      size={size}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      {children}
    </Container>
  );
};
