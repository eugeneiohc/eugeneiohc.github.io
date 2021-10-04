import React, { FC, HTMLAttributes } from 'react';

// Function that returns whether something is defined
export const isDef = (value: unknown) => value !== undefined;

export interface BoxProps<T = HTMLElement> extends HTMLAttributes<T> {
  width?: number | string;
  height?: number | string;
  spacing?: number | string;

  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pl?: number | string;
  pr?: number | string;
  pb?: number | string;

  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  ml?: number | string;
  mr?: number | string;
  mb?: number | string;

  display?: string;
  flex?: string;
}

export interface GenericProps extends BoxProps {
  // The "as" attribute is for the variants of the components
  as?: string;
}

export const Box: FC<GenericProps> = ({
  as: Component = 'div',
  width,
  height,
  spacing,
  p = 0,
  px,
  py,
  pt,
  pl,
  pr,
  pb,
  m = 0,
  mx,
  my,
  mt,
  ml,
  mr,
  mb,
  display,
  flex,
  ...props
}) => (
  <Component
    {...props}
    css={{
      width,
      height,
      gap: spacing,
      padding:
        isDef(p) || isDef(px) || isDef(py) || isDef(pt) || isDef(pl) || isDef(pr) || isDef(pb)
          ? `${pt ?? py ?? p}px ${pr ?? px ?? p}px ${pb ?? py ?? p}px ${pl ?? px ?? p}px `
          : undefined,
      margin:
        isDef(m) || isDef(mx) || isDef(my) || isDef(mt) || isDef(ml) || isDef(mr) || isDef(mb)
          ? `${mt ?? my ?? m}px ${mr ?? mx ?? m}px ${mb ?? my ?? m}px ${ml ?? mx ?? m}px `
          : undefined,
      display,
      flex,
    }}
  />
);