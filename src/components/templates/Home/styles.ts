import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
        'favorites header profile' 
        'favorites main profile';
    grid-template-columns: 80px auto 300px;
    grid-template-rows: 60px auto;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    gap: 20px;

    background: ${props => props.theme.colors.bgPrimary};

    .favorites { 
        grid-area: favorites;

        background: ${props => props.theme.colors.bgSecondary};
        border-radius: 20px;
    }
    
    header {
        grid-area: header;


        background: ${props => props.theme.colors.bgSecondary};
        border-radius: 20px;
    }

    .profile {
        grid-area: profile;


        background: ${props => props.theme.colors.bgSecondary};
        border-radius: 20px;
    }

    main {
        grid-area: main;


        background: ${props => props.theme.colors.bgSecondary};
        border-radius: 20px;
    }
`