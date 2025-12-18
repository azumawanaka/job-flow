import { createTheme } from '@mui/material/styles';

// Extend the MUI theme typing
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      color: {
        background: string;
        border: string;
        primary: string;
        secondary: string;
        secondaryForeground: string;
        card: string;
        input: string;
        primaryForeground: string;
        cardForeground: string;
        foreground: string;
        muted: string;
        mutedForeground: string;
        success: string;
        successForeground: string;
        accent: string;
        accentForeground: string;
        destructive: string;
        destructiveForeground: string;
        warning: string;
        warningForeground: string;
        sidebar: string;
        sidebarForeground: string;
        sidebarPrimary: string;
        sidebarPrimaryForeground: string;
        shadow: string;
      };
      font: {
        themeFont: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      color?: Partial<Theme['custom']['color']>;
      font?: Partial<Theme['custom']['font']>;
    };
  }
}

// Import the default Theme type to ensure compatibility
import type { Theme as DefaultTheme } from '@mui/material/styles';

// Create a type that merges your custom theme with the default
interface CustomTheme extends DefaultTheme {
  custom: {
    color: {
      background: string;
      border: string;
      primary: string;
      secondary: string;
      secondaryForeground: string;
      card: string;
      input: string;
      primaryForeground: string;
      cardForeground: string;
      foreground: string;
      muted: string;
      mutedForeground: string;
      success: string;
      successForeground: string;
      accent: string;
      accentForeground: string;
      destructive: string;
      destructiveForeground: string;
      warning: string;
      warningForeground: string;
      sidebar: string;
      sidebarForeground: string;
      sidebarPrimary: string;
      sidebarPrimaryForeground: string;
      shadow: string;
    };
    font: {
      themeFont: string;
    };
  };
}

export const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    h1: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    h2: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    h3: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    h4: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    h5: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    h6: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    subtitle1: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    subtitle2: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    body1: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    body2: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    button: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    caption: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
    overline: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
  },
  custom: {
    color: {
      background: '#040405ff',
      border: '#e3e3e6',
      primary: '#0288d1',
      secondary: '#E6F0FF',
      secondaryForeground: '#0F1724',
      card: '#ffffff',
      input: '#ffffff',
      primaryForeground: '#ffffff',
      cardForeground: '#0b0b0c',
      foreground: '#0F1724',
      muted: '#f4f5f7',
      mutedForeground: '#6B7280',
      success: '#e6f9f0',
      successForeground: '#0b6a46',
      accent: '#7ea6ff',
      accentForeground: '#07214a',
      destructive: '#ffedec',
      destructiveForeground: '#8a1e20',
      warning: '#fff7e6',
      warningForeground: '#6a4b00',
      sidebar: '#f2f3f5',
      sidebarForeground: '#33363a',
      sidebarPrimary: '#e9f0ff',
      sidebarPrimaryForeground: '#1a3b6a',
      shadow: '#ebebeb',
    },
    font: {
      themeFont: 'var(--font-inter), Inter, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam: CustomTheme) => ({
        html: {
          fontFamily: themeParam.custom.font.themeFont,
        },
        body: {
          fontFamily: themeParam.custom.font.themeFont,
          backgroundColor: themeParam.custom.color.background,
          color: themeParam.custom.color.foreground,
          margin: 0,
          padding: 0,
        },
        '*': {
          fontFamily: `${themeParam.custom.font.themeFont} !important`,
        },
      }),
    },
  },
});
