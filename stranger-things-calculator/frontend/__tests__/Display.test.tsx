import { render, screen } from '@testing-library/react';
import Display from '@/components/Display';

describe('Display', () => {
  it('shows 0 when result is empty', () => {
    render(<Display expression="" result="" error="" />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('shows result value', () => {
    render(<Display expression="2 + 2" result="4" error="" />);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('shows expression', () => {
    render(<Display expression="5 ×" result="5" error="" />);
    expect(screen.getByText('5 ×')).toBeInTheDocument();
  });

  it('shows error message instead of result', () => {
    render(<Display expression="" result="" error="Error in the Upside Down" />);
    expect(screen.getByText('Error in the Upside Down')).toBeInTheDocument();
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
