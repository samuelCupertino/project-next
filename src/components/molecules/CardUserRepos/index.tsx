import React from 'react'
import Link from 'next/link'
import { IFollowingRepos } from '../../../services/api'

import { Container } from './styles'
import { Title, Text, Image, Icon, Wrapper } from '../../atoms'

interface ICardUserProps {
  margin?: number[]
  repos: IFollowingRepos
}

export const CardUserRepos: React.FC<ICardUserProps> = ({ margin, repos }) => {
  return (
    <Container margin={margin}>
      <Wrapper gap={10} width="100%" justifyContent="flex-start">
        <Icon iconName="HiOutlineHeart" fontSize={28} color="primary" cursor="pointer" />
        <Icon iconName="HiOutlineStar" fontSize={28} color="primary" cursor="pointer" />
      </Wrapper>

      <Wrapper 
        width="100%"
        flexDirection="column" 
        gap={15} 
        bgColor="bgPrimary" 
        borderRadius={[20]} 
        padding={[20]}
      >
        <Wrapper 
          width="100%"
          justifyContent="space-between" 
        >
          <Title 
            color="textSecondary" 
            margin={[0,0,10,0]}
            fontSize={12}
            cursor="pointer" 
          >{repos.name}</Title>
          <Link href={`/profile/${repos.owner.login}`} passHref>
            <Image 
              src={repos.owner.avatar}
              alt="Foto de perfil do usuário."
              width={70}
              margin={[-70,0,0,'auto']}
              borderRadius="50%"
              aspectRatio={1}
              borderWidth={5}
              borderColor="bgPrimary"
              cursor="pointer"
            />
          </Link>
        </Wrapper>

        <Text 
          color="textTertiary" 
          fontSize={10}
          maxLine={3}
        >{repos.description}</Text>
      </Wrapper>
    </Container>
  )
}
