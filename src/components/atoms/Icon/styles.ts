import styled from 'styled-components'

interface IContainerProps {
    color?: 'primary' | 'secondary' | 'tertiary' | 'textPrimary' | 'textSecondary' | 'textTertiary'
    padding?: number[]
    margin?: (number|string)[]
    cursor?: 'pointer' | 'default'
    rotate?: number
}

export const Container = styled.div<IContainerProps>`
    color: ${({ color, theme })=> color ? theme.colors[color] : 'inherit'};
    padding: ${({ padding, theme }) => theme.utils.clockProps(padding)};
    cursor: ${({ cursor }) => cursor};
    transform: rotate(${({ rotate=0 }) => rotate}deg);
    margin: ${({ margin, theme })=> theme.utils.clockProps(margin)};
`