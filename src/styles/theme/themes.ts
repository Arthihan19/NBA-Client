const lightTheme = {
  primary: 'rgba(0, 67, 140)',
  secondary: 'rgba(218, 26, 50)',
  text: 'rgba(0, 67, 140)',
  textSecondary: 'rgba(0, 0, 0)',
  background: 'rgba(255, 255, 255)',
  backgroundVariantBlue: 'rgba(63, 113, 168)',
  backgroundVariantRed: 'rgba(246, 198, 204)',
  backgroundVariantLight: 'rgba(253,241,243)',
  border: 'rgba(0, 0, 0)',
  borderLight: 'rgba(0, 0, 0, 0.2)',
};

const darkTheme: Theme = {
  primary: 'rgba(0, 67, 140)',
  secondary: 'rgba(218, 26, 50)',
  text: 'rgba(0, 67, 140)',
  textSecondary: 'rgba(0, 0, 0)',
  background: 'rgba(255, 255, 255)',
  backgroundVariantBlue: 'rgba(63, 113, 168)',
  backgroundVariantRed: 'rgba(246, 198, 204)',
  backgroundVariantLight: 'rgba(253,241,243)',
  border: 'rgba(0, 0, 0)',
  borderLight: 'rgba(0, 0, 0)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
