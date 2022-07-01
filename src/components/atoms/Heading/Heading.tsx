import React, { ElementType, FC, ReactNode } from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  level:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  isThin?: boolean;
};

export const Heading: FC<HeadingProps> = ({ level = 'h2', children, isThin }) => {
  const Heading =level as ElementType;
  return (
    <Styled.Text as={Heading} isThin={isThin}>
      {children}
    </Styled.Text>
  );
};
