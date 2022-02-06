import styled from 'styled-components'

interface IContainerProps {
    gap?: number
    itemMinWidth?: number
}

export const Container = styled.div<IContainerProps>`
    display: grid;
    gap: ${({ gap=10, theme })=> theme.utils.applySuffix(gap)};
    grid-template-columns: repeat(
        auto-fill, 
        minmax(min(100%, ${({ itemMinWidth=250, theme })=> theme.utils.applySuffix(itemMinWidth)}),1fr)
    );
    
    > * {
        /* min-width: ${({ itemMinWidth=250, theme })=> theme.utils.applySuffix(itemMinWidth)}; */
    }
`