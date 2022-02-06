import styled from 'styled-components'

interface IContainerProps {
    flexDirection?: 'row' | 'column'
    gap?: number
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    padding?: number[]
    margin?: number[]
    height?: number | string
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex: 1;
    width: 100%;
    height: ${({ height, theme }) => theme.utils.applySuffix(height)};
    flex-direction: column;
    gap: ${({ gap=0 }) => gap}px;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    padding: ${({ padding, theme }) => theme.utils.clockProps(padding)};
    margin: ${({ margin, theme }) => theme.utils.clockProps(margin)};
    position: relative;
    overflow: scroll;


    &::before, &::after {
        content: '';
        width: 100%;
        padding: 25px 0;
        position: sticky;
        margin-top: -50px;
        z-index: 1;
    }

    &::before {
        top: 0;
        background-image: linear-gradient(${({ theme }) => theme.colors.bgSecondary}, transparent);
    }

    &::after {
        bottom: 0;
        background-image: linear-gradient(transparent, ${({ theme }) => theme.colors.bgSecondary});
    }
`
