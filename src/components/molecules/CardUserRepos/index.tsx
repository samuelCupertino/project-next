import React from 'react'
import { Container } from './styles'
import { Title, Text, Image, Icon, Wrapper } from '../../atoms'

interface ICardUserProps {
  margin?: number[]
}

export const CardUserRepos: React.FC<ICardUserProps> = ({ margin }) => {
  return (
    <Container margin={margin}>
      <Wrapper gap={10} width="100%" justifyContent="flex-start">
        <Icon iconName="HiOutlineHeart" fontSize={28} color="primary" cursor="pointer" />
        <Icon iconName="HiOutlineStar" fontSize={28} color="primary" cursor="pointer" />
      </Wrapper>

      <Wrapper 
        flexDirection="column" 
        gap={15} 
        bgColor="bgPrimary" 
        borderRadius={[20]} 
        padding={[20]}
      >
        <Wrapper 
          justifyContent="space-between" 
          width="100%"
        >
          <Title 
            color="textSecondary" 
            margin={[0,0,10,0]}
            fontSize={12}
            cursor="pointer" 
          >aluracord-matrix</Title>
          <Image 
            // src="https://avatars.githubusercontent.com/u/88355379?v=4" 
            src="/github-light.png"
            alt="Foto de perfil do usuário."
            width={70}
            margin={[-70,0,0,'auto']}
            borderRadius="50%"
            aspectRatio={1}
            borderWidth={5}
            borderColor="bgPrimary"
            cursor="pointer"
          />
        </Wrapper>

        <Text 
          color="textTertiary" 
          fontSize={10}
          cursor="pointer" 
        >Projeto desenvolvido durante a imersão React com a @alura @omariosouto @peas.</Text>
      </Wrapper>
    </Container>
  )
}
