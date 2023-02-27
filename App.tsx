import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold
} from '@expo-google-fonts/overpass';

import theme from './src/theme/theme';
import { Navigation } from './src/routes/Navigation';
export default function App() {

  let [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
