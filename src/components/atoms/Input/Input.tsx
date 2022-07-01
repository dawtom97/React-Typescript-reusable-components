import React, { FC, forwardRef } from 'react';
import * as Styled from './styles';

export type InputProps = {
  placeholder?: string;
  name?: string;
  isLabelled?: boolean;
  label?: string;

};

export const Input = forwardRef<HTMLInputElement,InputProps>(({ placeholder, name, isLabelled, label = 'Label text'},ref) => {
  if (isLabelled) {
    return (
      <Styled.LabelledInput ref={ref}>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Input name={name} placeholder={placeholder} />
      </Styled.LabelledInput>
    );
  }
  return <Styled.Input ref={ref} name={name} placeholder={placeholder} />;
});

Input.displayName = 'Input';
