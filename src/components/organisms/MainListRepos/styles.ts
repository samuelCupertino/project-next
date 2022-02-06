import styled from 'styled-components'

export const Container = styled.main`
    grid-area: main;
    padding: 10px 20px;
    border-radius: 20px;

    background: ${props => props.theme.colors.bgSecondary};
`