import 'styled-components'
import theme from '../theme/theme'

declare module 'style-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}