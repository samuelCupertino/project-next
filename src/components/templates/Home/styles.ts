import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
        'favorites header profile' 
        'favorites main profile';
    grid-template-columns: 90px auto 300px;
    grid-template-rows: 60px calc(100vh - 120px);
    width: 100vw;
    height: 100vh;
    padding: 20px;
    gap: 20px;

    background: ${props => props.theme.colors.bgPrimary};

    @media (max-width: 800px) {
        grid-template-areas: 
            'favorites header .' 
            'favorites main profile';
        grid-template-columns: 90px calc(100vw - 150px) 300px;
        grid-template-rows: 60px calc(100vh - 120px);
    }
`