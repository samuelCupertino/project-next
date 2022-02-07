import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    background: ${props => props.theme.colors.bgSecondary};
    border-radius: 20px;

    .icon-HiMenuAlt1 {
        display: none;
    }
    @media (max-width: 800px) {
        .icon-HiMenuAlt1 {
            display: flex;
        }
    }
`