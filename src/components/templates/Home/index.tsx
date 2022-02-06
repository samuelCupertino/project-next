import React from 'react'
import { Container } from './styles'

import { FavoriteBar, Header, ProfileBar, MainListRepos } from '../../organisms'

export const Home: React.FC = () => {
  return (
    <Container>
      <FavoriteBar />
      <Header />
      <ProfileBar />
      <MainListRepos />
    </Container>
  )
}
