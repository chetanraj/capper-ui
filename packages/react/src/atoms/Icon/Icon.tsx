import type { ComponentType, SVGProps } from 'react';
import styles from './Icon.module.css';

type IconSize = 'sm' | 'md' | 'lg';

type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

type IconProps = Omit<SVGProps<SVGSVGElement>, 'size'> & {
  /** Feather icon component, e.g. Sun or ArrowLeft */
  icon: ComponentType<IconComponentProps>;
  /** Capper UI size scale mapped to pixel dimensions */
  size?: IconSize;
  /** Accessible label. Omit when decorative and paired with visible text. */
  label?: string;
};

const pixelSize: Record<IconSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

/**
 * Icon renders a Feather icon at a consistent Capper UI size with currentColor.
 *
 * @example
 * import { ArrowLeft, Icon } from '@capper-ui/react';
 * <Icon icon={ArrowLeft} label="Back" />
 * <Icon icon={Sun} size="sm" aria-hidden />
 */
export function Icon({ icon: IconComponent, size = 'md', label, className, ...rest }: IconProps) {
  const classes = [styles.icon, styles[`size-${size}`], className].filter(Boolean).join(' ');

  return (
    <IconComponent
      size={pixelSize[size]}
      className={classes}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      {...rest}
    />
  );
}
