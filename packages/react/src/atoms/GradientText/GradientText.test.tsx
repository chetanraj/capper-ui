import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GradientText } from './GradientText';

describe('GradientText', () => {
  it('renders children', () => {
    render(<GradientText>Heading copy</GradientText>);
    expect(screen.getByText('Heading copy')).toBeInTheDocument();
  });

  it('renders as h1 when as is h1', () => {
    render(
      <GradientText as="h1" data-testid="g">
        Title
      </GradientText>,
    );
    expect(screen.getByTestId('g').tagName).toBe('H1');
  });

  it('renders as h2 and h3', () => {
    const { rerender } = render(
      <GradientText as="h2" data-testid="g">
        Section
      </GradientText>,
    );
    expect(screen.getByTestId('g').tagName).toBe('H2');
    rerender(
      <GradientText as="h3" data-testid="g">
        Subsection
      </GradientText>,
    );
    expect(screen.getByTestId('g').tagName).toBe('H3');
  });

  it('applies a variant class', () => {
    render(
      <GradientText variant="warm" data-testid="g">
        Warm
      </GradientText>,
    );
    expect(screen.getByTestId('g').className).toMatch(/variant-warm/);
  });
});
