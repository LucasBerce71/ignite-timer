import 'styled-components'
import { defaultTheme as DefaultTheme } from '../styles/themes/default'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
