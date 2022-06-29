import { FC } from 'react';
import styled from 'styled-components';

type TButtonComponent = {
  children: string;
  ariaLabel?: string;
  size?: 'isBig' | 'isSmall' | 'isRegular';
  btnType?: 'isPrimary' | 'isSecondary' | 'isTertiary'
};

const StyledButton = styled.button<TButtonComponent>`
  width: ${({ size }) => {
    if (size === 'isSmall') return '100px';
    if (size === 'isBig') return '200px';
    if (size === 'isRegular') return 'initial';
    return 'initial';
  }};
  background-color: ${({ btnType }) => {
    if (btnType === 'isPrimary') return 'red';
    if (btnType === 'isSecondary') return 'blue';
    if (btnType === 'isTertiary') return 'gold';
    return 'initial';
  }};
  border-radius: 12px;
`;

export const Button: FC<TButtonComponent> = ({
  children,
  ariaLabel = 'Press the button',
  size = 'isRegular',
  btnType = 'isPrimary'
}) => {
  return (
    <StyledButton aria-label={ariaLabel} size={size} btnType={btnType}>
      {children}
    </StyledButton>
  );
};
