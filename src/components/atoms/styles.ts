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
      padding: 5px 7.5px;
      font-size: 1.2rem;
    `,
    regular: css`
      padding: 8px 13px;
      font-size: 1.6rem;
    `,
    large: css`
      padding : 12px 15px ;
      font-size: 1.6rem;
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
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  ${({color}) => color && COLOR[color]};
  ${({size})=> size && SIZE[size]};
  ${({disabled}) => disabled && DISABLED};

  &:focus {
    box-shadow: 0px 5px 12px #7a7a7a;
  }

`
