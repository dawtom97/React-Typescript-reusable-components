import { render } from '@testing-library/react';
import { Heading } from './Heading';


describe('Tests for Heading component', () => {
  test('should render a heading', () => {
    render(<Heading level="h2" />)
  });
  
});

