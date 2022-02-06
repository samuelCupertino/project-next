import styled from 'styled-components'

interface IContainerProps {
    bgColor?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
    fontSize?: number
    borderRadius?: number[] | string[]
    padding?: number[]
    bgLinearGradient?: [
        'bgPrimary' | 'bgSecondary' | 'bgTertiary',
        'bgPrimary' | 'bgSecondary' | 'bgTertiary'
    ]
}

export const Container = styled.button<IContainerProps>`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ fontSize=12 })=> fontSize}pt;
    border-radius: ${({ borderRadius=[0], theme })=> theme.utils.clockProps(borderRadius)};
    padding: ${({ padding=[0], theme })=> theme.utils.clockProps(padding)};
    background-color: ${({ bgColor, theme })=> theme.colors[bgColor || 'bgPrimary']};
    color: ${({ theme })=> theme.colors.textTertiary};
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 2px 3px 5px #151128;
        color: ${({ theme })=> theme.colors.secondary};
    }
`