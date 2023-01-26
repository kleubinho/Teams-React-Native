import 'styled-components'
import theme from 'src/theme'

declare module 'styled-components' {
    type ThemeType = typeof theme; //criando uma tipagem baseada no conteudo do tema

    export interface DefaultTheme extends ThemeType {}
}