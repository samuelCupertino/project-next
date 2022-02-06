import React from 'react'
import { IUserProfile } from '../../../services/api'

import { Container } from './styles'
import { Icon, Image, Text, Wrapper, Scroll } from '../../atoms'
import { CardRepos } from '../../molecules'

interface IProfileBarProps {
  userProfile: IUserProfile
}

export const ProfileBar: React.FC<IProfileBarProps> = ({ userProfile }) => {

  return (
    <Container>
      <Image 
        src={userProfile.avatar}
        alt="Foto de perfil do usuário."
        borderRadius="50%"
        aspectRatio={1}
      />

      <Text fontSize={18} margin={[25,0,0]}>{userProfile.name}</Text>

      <Wrapper margin={[0,0,10]}>
        <Text fontSize={12} color="textTertiary">@{userProfile.login}</Text>
        <Icon 
          iconName="HiDuplicate" 
          color="textTertiary"
          fontSize={16} 
          padding={[5]}
        />
      </Wrapper>

      <Wrapper gap={20}>
        <Wrapper gap={5}>
          <Icon iconName="HiCode" color="primary" fontSize={22}/>
          <Text fontSize={12} color="textTertiary">{userProfile.public_repos}</Text>
        </Wrapper>
        <Wrapper gap={5}>
          <Icon iconName="HiUser" color="primary" fontSize={22}/>
          <Text fontSize={12} color="textTertiary">{userProfile.following}</Text>
        </Wrapper>
        <Wrapper gap={5}>
          <Icon iconName="HiUsers" color="primary" fontSize={22}/>
          <Text fontSize={12} color="textTertiary">{userProfile.followers}</Text>
        </Wrapper>
      </Wrapper>

      <Scroll margin={[20,0,0]} gap={15}>
        { userProfile.repos.map((repos, index) => (
          <CardRepos
            key={index}
            repos={repos}
          />
        ))}
      </Scroll>
    </Container>
  )
}
