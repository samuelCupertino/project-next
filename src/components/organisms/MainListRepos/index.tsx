import React from 'react'
import { Container } from './styles'
import { Scroll, GridFluid } from '../../atoms'
import { CardUserRepos } from '../../molecules'

export const MainListRepos: React.FC = () => {

  return (
    <Container>
      <Scroll height="100%" gap={20}>
        <GridFluid gap={20} itemMinWidth={270}>
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
          <CardUserRepos />
        </GridFluid>
      </Scroll>
    </Container>
  )
}
