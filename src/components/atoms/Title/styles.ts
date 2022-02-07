import styled from 'styled-components'

interface ITitleComponentProps {
    fontSize?: number
    color?: 'primary' | 'secondary' | 'tertiary' | 'textPrimary' | 'textSecondary' | 'textTertiary'
    margin?: number[]
    padding?: number[]
    cursor?: 'pointer' | 'default'
}

export const TitleComponent = styled.h1<ITitleComponentProps>`
    font-size: ${({ fontSize=12 })=> fontSize}pt;
    color: ${({ color='textPrimary', theme })=> theme.colors[color]};
    margin: ${({ margin, theme })=> theme.utils.clockProps(margin)};
    padding: ${({ padding, theme })=> theme.utils.clockProps(padding)};
    cursor: ${({ cursor })=> cursor};

    text-overflow: ellipsis;
    overflow: hidden;
`