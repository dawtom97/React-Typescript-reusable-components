import { FC, MouseEvent, ReactNode } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  color?: 'primary' | 'secondary';
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
    <Styled.Container
      size={size}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      {children}
    </Styled.Container>
  );
};
