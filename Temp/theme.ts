export const theme = {
  colors: {
    background: {
      base: '#000000', // Pure black
      surface: '#0A0A0A', // Slightly elevated
      surfaceHover: '#141414',
      elevated: '#111111',
    },
    primary: {
      brand: '#FFFFFF', // Attio relies heavily on high-contrast B&W
      accent: '#3B82F6', // A refined, professional blue for subtle highlights
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA', // Zinc 400 - very elegant gray
      muted: '#52525B',     // Zinc 600
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.08)',
      highlight: 'rgba(255, 255, 255, 0.15)',
    }
  },
  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    scale: {
      small: '0.875rem',
      base: '1rem',
      h2: '2rem',
      h1: '4.5rem', // Massive headings
    },
    letterSpacing: {
      tighter: '-0.04em', // Crucial for the Attio heading look
      tight: '-0.02em',
    }
  }
};
