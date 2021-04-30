/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
type BreakpointKey = 'small' | 'medium' | 'big';

const breakpoints: Record<BreakpointKey, number> = {
  small: 500,
  medium: 750,
  big: 1000,
};

export const mediaScreenMin = (breakpoint: BreakpointKey) =>
  `@media (min-width: ${breakpoints[breakpoint]}px)`;
