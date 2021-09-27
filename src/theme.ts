const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray20: '#333333',
  gray40: '#666666',
  blue80: '#61dafb',
};

const baseFontStyle = {
  color: colors.black,
  fontSize: 16,
  fontFamily: "'Ubuntu'",
};

const textStyles = {
  body: {
    ...baseFontStyle,
  },
  sm: {
    ...baseFontStyle,
    fontSize: 12,
  },
  lg: {
    ...baseFontStyle,
    fontSize: 20,
  },
  code: {
    ...baseFontStyle,
    fontFamily: "'Courier New'",
  },
  link: {
    ...baseFontStyle,
    color: colors.blue80,
  },
};

export const theme = {
  colors,
  textStyles,
};
