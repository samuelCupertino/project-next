import styled from 'styled-components'

interface IContainerProps {
    color?: 'primary' | 'secondary' | 'tertiary' | 'textPrimary' | 'textSecondary' | 'textTertiary'
    padding?: number[]
    cursor?: 'pointer' | 'default'
}

export const Container = styled.div<IContainerProps>`
    color: ${({ color, theme })=> color ? theme.colors[color] : 'inherit'};
    padding: ${({ padding, theme }) => theme.utils.clockProps(padding)};
    cursor: ${({ cursor }) => cursor};
`