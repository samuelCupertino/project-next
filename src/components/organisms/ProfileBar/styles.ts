import styled from 'styled-components'

interface IContainerProps {
    isOpen?: boolean
}

export const Container = styled.aside<IContainerProps>`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    border-radius: 30px;   
    position: relative;

    background: ${({ theme }) => theme.colors.bgSecondary};
    overflow: scroll;
    z-index: 2;
    transition: 0.75s ease-in-out;


    @media (max-width: 800px) {
        transform: translateX(${({ isOpen=true }) => isOpen ? '-320px' : '20px'});
        border: 3px solid ${({ theme }) => theme.colors.bgTertiary};

        filter: drop-shadow(-30px 0px 10px ${({ theme }) => theme.colors.bgPrimary});
    }
`