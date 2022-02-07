import styled from 'styled-components'

interface ITextComponentProps {
    fontSize?: number
    color?: 'textPrimary' | 'textSecondary' | 'textTertiary'
    margin?: number[]
    padding?: number[]
    cursor?: 'pointer' | 'default'
    maxLine?: number
}

export const TextComponent = styled.p<ITextComponentProps>`
    font-size: ${({ fontSize=12 })=> fontSize}pt;
    color: ${({ color='textPrimary', theme })=> theme.colors[color]};
    margin: ${({ margin, theme })=> theme.utils.clockProps(margin)};
    padding: ${({ padding, theme })=> theme.utils.clockProps(padding)};
    cursor: ${({ cursor })=> cursor};


    ${({ maxLine }) => maxLine && `
        text-overflow: ellipsis;
        overflow: hidden;

        @supports (-webkit-line-clamp: 2) {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${maxLine};
        }
    `}
`