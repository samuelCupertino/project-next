import styled from 'styled-components'

export const Container = styled.aside`
    grid-area: favorites;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;

    background: ${props => props.theme.colors.bgSecondary};
    border-radius: 35px;   
`