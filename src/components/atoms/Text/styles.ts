import styled from 'styled-components'

interface ITextComponentProps {
    fontSize?: number
    color?: 'textPrimary' | 'textSecondary' | 'textTertiary'
    margin?: number[]
    padding?: number[]
    cursor?: 'pointer' | 'default'
}

export const TextComponent = styled.p<ITextComponentProps>`
    font-size: ${({ fontSize=12 })=> fontSize}pt;
    color: ${({ color='textPrimary', theme })=> theme.colors[color]};
    margin: ${({ margin, theme })=> theme.utils.clockProps(margin)};
    padding: ${({ padding, theme })=> theme.utils.clockProps(padding)};
    cursor: ${({ cursor })=> cursor};
`