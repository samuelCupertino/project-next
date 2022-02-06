import styled from 'styled-components'

interface IContainerProps {
    borderRadius?: number | string
    opacity?: number
    aspectRatio?: number
    width?: number | string
    height?: string | number
    margin?: (number|string)[] 
    borderColor?: 'primary' | 'secondary' | 'tertiary' | 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
    borderWidth?: number
    cursor?: 'pointer' | 'default'
}

export const Container = styled.div<IContainerProps>`
    flex: none;
    overflow: hidden;
    border-radius: ${({ borderRadius, theme })=> theme.utils.applySuffix(borderRadius, 'px')};
    opacity: ${({ opacity=1 })=> opacity};
    aspect-ratio: ${({ aspectRatio })=> aspectRatio};
    width: ${({ width, theme })=> theme.utils.applySuffix(width)};
    height: ${({ height, theme })=> theme.utils.applySuffix(height)};
    margin: ${({ margin, theme })=> theme.utils.clockProps(margin)};
    border-style: solid;
    border-color: ${({ borderColor, theme })=> borderColor && theme.colors[borderColor]};
    border-width: ${({ borderWidth=0, theme })=> theme.utils.applySuffix(borderWidth, 'px')};
    cursor: ${({ cursor='default' })=> cursor};

    & > span {
        width: 100% !important;
        height: 100% !important;
    }
`