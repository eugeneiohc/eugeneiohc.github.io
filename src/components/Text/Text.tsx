import { useTheme } from '../ThemeProvider';
import React, { FC } from 'react';
import { Box, BoxProps } from '../Box';

const variantMap: Record<string, string> = {
  body: 'p',
};

export interface TextProps extends BoxProps<HTMLParagraphElement> {
  variant?: 'body';
  color?: string;
}

export const Text: FC<TextProps> = ({ variant = 'body', color, ...props }) => {
  const theme = useTheme();

  const asVariant = variantMap[variant];

  return <Box as={asVariant} css={{ ...theme.textStyles[variant], color }} {...props} />;
};
