import React from 'react'

import { Container } from './styles'
import { Image, Separator, Wrapper, Icon, Scroll } from '../../atoms'
import { Button } from '../../molecules'

export const FavoriteBar: React.FC = () => {

  return (
    <Container>
      <Wrapper flexDirection="column" gap={20}>
        <Image 
          src="/github-dark.png" 
          alt="Logo Github"
          borderRadius="50%"
          opacity={0.85}
        />
        <Separator />
        <Icon iconName="HiOutlineHeart" color="primary" fontSize={50} cursor="pointer" />
      </Wrapper>

      <Scroll margin={[20,0]} gap={10}>
        { Array.from({ length: 8 }).map((_, index) => (
          <Image 
            key={index}
            src="/github-dark.png" 
            alt="Logo Github"
            borderRadius="50%"
            opacity={0.85}
          />
        ))}
      </Scroll>

      <Button 
        bgColor="bgTertiary"
        borderRadius={[22]}
        padding={[10]}
        iconName="HiOutlineLogout" 
        iconSize={40}
      />
    </Container>
  )
}
