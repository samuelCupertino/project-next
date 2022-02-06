import React from 'react'
import { Container } from './styles'
import { Title, Text } from '../../atoms'

interface ICardReposProps {
  margin?: number[]
}

export const CardRepos: React.FC<ICardReposProps> = ({ margin }) => {
  return (
    <Container margin={margin}>
      <Title 
        color="textSecondary" 
        margin={[0,0,10,0]}
        fontSize={12}
      >aluracord-matrix</Title>
      <Text 
        color="textTertiary" 
        fontSize={10}
      >Projeto desenvolvido durante a imersão React com a @alura @omariosouto @peas.</Text>
    </Container>
  )
}
