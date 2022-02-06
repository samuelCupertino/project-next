import React from 'react'
import { IRepos } from '../../../services/api'

import { Container } from './styles'
import { Title, Text } from '../../atoms'

interface ICardReposProps {
  margin?: number[],
  repos: IRepos
}

export const CardRepos: React.FC<ICardReposProps> = ({ margin, repos }) => {
  return (
    <Container margin={margin}>
      <Title 
        color="textSecondary" 
        margin={[0,0,10,0]}
        fontSize={12}
      >{repos.name}</Title>
      <Text 
        color="textTertiary" 
        fontSize={10}
      >{repos.description}</Text>
    </Container>
  )
}
