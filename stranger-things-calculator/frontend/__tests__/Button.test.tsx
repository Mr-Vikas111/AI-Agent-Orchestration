import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="7" onClick={() => {}} />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="+" onClick={handleClick} variant="operator" />);
    fireEvent.click(screen.getByText('+'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies number variant styles by default', () => {
    render(<Button label="5" onClick={() => {}} />);
    const btn = screen.getByText('5');
    expect(btn.className).toContain('bg-slate-900');
  });

  it('applies equals variant styles', () => {
    render(<Button label="=" onClick={() => {}} variant="equals" />);
    const btn = screen.getByText('=');
    expect(btn.className).toContain('bg-amber-700');
  });
});
