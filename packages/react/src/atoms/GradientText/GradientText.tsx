import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Text } from '../Text';
import styles from './GradientText.module.css';

type GradientVariant = 'ink' | 'accent' | 'warm' | 'soft';
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextAs = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type GradientTextProps = {
  /** HTML element to render */
  as?: TextAs;
  /** Named gradient. ink is the default for blog headings. */
  variant?: GradientVariant;
  /** Font size from the type scale */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  children: ReactNode;
  className?: string | undefined;
} & Omit<ComponentPropsWithoutRef<'span'>, 'color' | 'children' | 'className'>;

const variantClass: Record<GradientVariant, string | undefined> = {
  ink: styles['variant-ink'],
  accent: styles['variant-accent'],
  warm: styles['variant-warm'],
  soft: styles['variant-soft'],
};

/**
 * GradientText paints heading copy with a left to right token gradient.
 * Use on h1, h2, or h3. Prefer variant="ink" for long blog titles.
 *
 * @example
 * <GradientText as="h1" variant="ink" size="4xl" weight="bold">
 *   Shipping a design system in public
 * </GradientText>
 */
export function GradientText({
  as = 'span',
  variant = 'ink',
  size = '3xl',
  weight = 'bold',
  children,
  className,
  ...rest
}: GradientTextProps) {
  const classes = [styles.root, variantClass[variant], className].filter(Boolean).join(' ');

  return (
    <Text as={as} size={size} weight={weight} className={classes} {...rest}>
      {children}
    </Text>
  );
}
