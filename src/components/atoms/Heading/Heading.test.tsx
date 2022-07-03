import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Tests for Heading component', () => {
  test('should render a heading', () => {
    render(<Heading level='h2' />);
  });
  test('should be less than 6 and greater than 0', () => {
    const level = 3;
    render(<Heading level={`h${level}`} />);
    expect(level).toBeGreaterThan(0);
    expect(level).toBeLessThan(7);
  });
});
