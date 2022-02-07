import styled from 'styled-components'

interface IContainerProps {
    margin?: number[]
}

export const Container = styled.article<IContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 15px;

    margin: ${({ margin=[0], theme })=> theme.utils.clockProps(margin)};
    border: 1px solid ${({ theme }) => theme.colors.bgTertiary};
    background-color: ${({ theme }) => theme.colors.bgTertiary};
    transition: 0.75s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.secondary};
    }
`