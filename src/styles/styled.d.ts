import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            secondary: string
            tertiary: string
            bgPrimary: string
            bgSecondary: string
            bgTertiary: string
            textPrimary: string
            textSecondary: string
            textTertiary: string
        }
        utils: {
            applySuffix(prop:number|string|undefined, suffix='px'): string,
            clockProps(props:(number|string)[] = [], suffix:string='px'): string
        }
    }
}