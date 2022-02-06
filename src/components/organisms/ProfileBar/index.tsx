import React from 'react'
import { Container } from './styles'
import { Icon, Image, Text, Wrapper, Scroll } from '../../atoms'
import { CardRepos } from '../../molecules'

export const ProfileBar: React.FC = () => {

  return (
    <Container>
      <Image 
        src="https://avatars.githubusercontent.com/u/88355379?v=4" 
        alt="Foto de perfil do usuário."
        borderRadius="50%"
        aspectRatio={1}
      />

      <Text fontSize={18} margin={[25,0,0]}>Samuel Cupertino</Text>

      <Wrapper margin={[0,0,10]}>
        <Text fontSize={12} color="textTertiary">@samuelCupertino</Text>
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
          <Text fontSize={12} color="textTertiary">33</Text>
        </Wrapper>
        <Wrapper gap={5}>
          <Icon iconName="HiUser" color="primary" fontSize={22}/>
          <Text fontSize={12} color="textTertiary">8</Text>
        </Wrapper>
        <Wrapper gap={5}>
          <Icon iconName="HiUsers" color="primary" fontSize={22}/>
          <Text fontSize={12} color="textTertiary">10</Text>
        </Wrapper>
      </Wrapper>

      <Scroll margin={[20,0,0]} gap={15}>
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
        <CardRepos />
      </Scroll>
    </Container>
  )
}
