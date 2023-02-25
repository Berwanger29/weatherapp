import { ThemeProvider } from 'styled-components';

import { Greetings } from './src/screens/Greetings';


import theme from './src/theme/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Greetings />
    </ThemeProvider>
  );
}
