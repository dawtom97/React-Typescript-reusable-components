import styled from 'styled-components';
import { InputProps } from './Input';

export const Input = styled.input<InputProps>`
  
`

export const LabelledInput = styled.div`
  
  & > label,input {
    display: block;
  }
`

export const Label = styled.label`
   font-size: 1.3rem;
`