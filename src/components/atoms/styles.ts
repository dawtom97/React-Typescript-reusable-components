import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const COLOR = {
    primary: css`
      color: #fff;
      background: linear-gradient(#3f3cfe, #e943d5);
    `,
    secondary: css`
      color: #000;
      background: linear-gradient(#c7c7d2, #bcbaba);
    `,
};

const SIZE = {
    small: css`
      font-size: 1.1rem;
      min-width: 80px;
      min-height: 23px;
    `,
    regular: css`
      min-height: 30px;
      font-size: 1.4rem;
      min-width: 100px;
    `,
    large: css`
      min-height: 37px;
      font-size: 1.5rem;
      min-width: 120px;
    `
}

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;


export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  ${({ color }) => color && COLOR[color]};
  ${({ size }) => size && SIZE[size]};
  ${({ disabled }) => disabled && DISABLED};

  &:focus, &:hover {
    box-shadow: 0px 5px 12px #7a7a7a;
  }

`
