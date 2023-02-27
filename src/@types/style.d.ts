import { DefaultTheme } from 'styled-components/native';
import theme from '../theme/theme';

declare module 'style-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}