import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root {
  /* Category */
  --color-background: #1a171e;
   --color-background-light: #33252f;

  --color-text: #f9fafb;
  --color-text-secondary: #6b7280;

  --color-primary: #e92d77;
  --color-primary-dark: #b91f5b;
  --color-primary-background: rgba(233, 45, 119, 0.05);
  --color-secondary: #6f2232;
  --color-tertiary: #8030e4;



  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;


  --font-family-main: 'Lato';
  --font-family-secondary: 'Helvetica';
  --font-family-accent: 'Gabarito';
}

html {
  height: 100%;
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  margin: 0;
  padding: 0;
}
body {
  font-family: var(--font-family-main), Arial, Helvetica, sans-serif ;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 400;
  height: 100%;
  margin: 0;
  padding: 0;
}
`;