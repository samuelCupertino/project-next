import React from 'react'
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <aside className="favorites">fav</aside>
      <header>search</header>
      <main>
        profiles
      </main>
      <aside className="profile">my Profile</aside>
    </Container>
  )
}
