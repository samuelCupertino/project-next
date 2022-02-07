import React from 'react'
import { IFollowingRepos, IUserProfile } from '../../../services/api'

import { Container } from './styles'
import { FavoriteBar, Header, ProfileBar, MainListRepos } from '../../organisms'

export interface IHomeProps {
  followingRepos: IFollowingRepos[]
  userProfile: IUserProfile
}

export const Home: React.FC<IHomeProps> = ({ followingRepos, userProfile }) => {
  return (
    <Container>
      <FavoriteBar />
      <Header />
      <ProfileBar userProfile={userProfile} />
      <MainListRepos followingRepos={followingRepos} />
    </Container>
  )
}
