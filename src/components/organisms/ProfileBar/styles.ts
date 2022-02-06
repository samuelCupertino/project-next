import styled from 'styled-components'

export const Container = styled.aside`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    border-radius: 30px;   
    position: relative;

    background: ${props => props.theme.colors.bgSecondary};

    /* position: absolute;
    top: 20px;
    right: 25px;
    z-index: 2;
    width: 300px;
    height: calc(100% - 40px);
    border: 3px solid ${({ theme }) => theme.colors.bgTertiary}; */
`