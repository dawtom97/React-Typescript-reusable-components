import React, { FC } from 'react';
import * as Styled from './styles';

export type InputProps = {
  placeholder?: string;
  name?: string;
  isLabelled?: boolean;
  label?: string;
};

export const Input: FC<InputProps> = ({ placeholder, name, isLabelled, label = 'Label text'}) => {
  if (isLabelled) {
    return (
      <Styled.LabelledInput>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Input name={name} placeholder={placeholder} />
      </Styled.LabelledInput>
    );
  }
  return <Styled.Input name={name} placeholder={placeholder} />;
};
