import React from 'react'
import { IFollowingRepos, IUserProfile } from '../../../services/api'

import { Container } from './styles'
import { FavoriteBar, Header, ProfileBar, MainListRepos } from '../../organisms'

export interface IHomeProps {
  followingRepos: IFollowingRepos[]
  userProfile: IUserProfile
}

export const Home: React.FC<IHomeProps> = ({ followingRepos, userProfile }) => {
  const [showProfileBar, setShowProfileBar] = React.useState(true)
  
  return (
    <Container>
      <FavoriteBar />
      <Header handleProfileBar={() => setShowProfileBar(!showProfileBar)}/>
      <ProfileBar userProfile={userProfile} isOpen={showProfileBar}/>
      <MainListRepos followingRepos={followingRepos} />
    </Container>
  )
}
