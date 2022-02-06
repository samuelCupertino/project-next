import styled from 'styled-components'

interface IContainerProps {
    flexDirection?: 'row' | 'column'
    gap?: number
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    padding?: number[]
    margin?: number[]
    bgColor?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
    borderRadius?: number[]
    width?: number | string
}

export const Container = styled.div<IContainerProps>`
    position: relative;
    display: flex;
    gap: ${({ gap=0 }) => gap}px;
    justify-content: ${({ justifyContent='center' }) => justifyContent};
    align-items: ${({ alignItems='center' }) => alignItems};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    padding: ${({ padding, theme }) => theme.utils.clockProps(padding)};
    margin: ${({ margin, theme }) => theme.utils.clockProps(margin)};
    background-color: ${({ bgColor, theme })=> bgColor && theme.colors[bgColor]};
    border-radius: ${({ borderRadius, theme })=> theme.utils.clockProps(borderRadius)};
    width: ${({ width, theme })=> theme.utils.applySuffix(width)};
`